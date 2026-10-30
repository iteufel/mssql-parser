using System.Collections;
using System.Collections.Concurrent;
using System.Globalization;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Text.Json;
using System.Text.Json.Nodes;
using Microsoft.SqlServer.TransactSql.ScriptDom;

namespace Meta.MssqlParser;

internal static class FragmentJson
{
    private static readonly ConcurrentDictionary<string, Type> TypesByName = new(StringComparer.Ordinal);
    private static readonly ConcurrentDictionary<Type, PropertyInfo[]> Properties = new();
    private static readonly HashSet<string> SkipProperties = new(StringComparer.Ordinal)
    {
        "ScriptTokenStream",
        "FirstTokenIndex",
        "LastTokenIndex",
        // Derived MultiPartIdentifier / SchemaObjectName views of Identifiers.
        "Count",
        "ServerIdentifier",
        "DatabaseIdentifier",
        "SchemaIdentifier",
        "BaseIdentifier",
        "ChildIdentifier",
    };

    static FragmentJson()
    {
        foreach (var type in typeof(TSqlFragment).Assembly.GetTypes())
        {
            if (!typeof(TSqlFragment).IsAssignableFrom(type) || type.IsAbstract)
            {
                continue;
            }

            TypesByName[type.Name] = type;
        }
    }

    public static JsonObject Serialize(TSqlFragment fragment)
    {
        return SerializeFragment(fragment);
    }

    public static TSqlFragment Deserialize(JsonNode node)
    {
        if (node is not JsonObject obj)
        {
            throw new ArgumentException("AST root must be a JSON object.");
        }

        return DeserializeFragment(obj);
    }

    public static IReadOnlyDictionary<string, Type> FragmentTypes => TypesByName;

    public static PropertyInfo[] GetProperties(Type type)
    {
        return Properties.GetOrAdd(type, t =>
        {
            return t.GetProperties(BindingFlags.Instance | BindingFlags.Public)
                .Where(p => p.GetIndexParameters().Length == 0 && !SkipProperties.Contains(p.Name))
                .ToArray();
        });
    }

    private static JsonObject SerializeFragment(TSqlFragment fragment)
    {
        var obj = new JsonObject
        {
            ["$type"] = fragment.GetType().Name,
            ["startLine"] = fragment.StartLine,
            ["startColumn"] = fragment.StartColumn,
            ["startOffset"] = fragment.StartOffset,
            ["fragmentLength"] = fragment.FragmentLength,
        };

        foreach (var property in GetProperties(fragment.GetType()))
        {
            if (property.Name is "StartLine" or "StartColumn" or "StartOffset" or "FragmentLength")
            {
                continue;
            }

            object? value;
            try
            {
                value = property.GetValue(fragment);
            }
            catch
            {
                continue;
            }

            obj[ToCamelCase(property.Name)] = SerializeValue(value);
        }

        return obj;
    }

    private static JsonNode? SerializeValue(object? value)
    {
        switch (value)
        {
            case null:
                return null;
            case TSqlFragment fragment:
                return SerializeFragment(fragment);
            case string s:
                return JsonValue.Create(s);
            case bool b:
                return JsonValue.Create(b);
            case Enum e:
                return JsonValue.Create(e.ToString());
            case byte or sbyte or short or ushort or int or uint or long or ulong or float or double or decimal:
                return JsonValue.Create(Convert.ToDecimal(value, CultureInfo.InvariantCulture));
            case IEnumerable enumerable when value is not string:
            {
                var array = new JsonArray();
                foreach (var item in enumerable)
                {
                    array.Add(SerializeValue(item));
                }

                return array;
            }
            default:
                return JsonValue.Create(Convert.ToString(value, CultureInfo.InvariantCulture));
        }
    }

    private static TSqlFragment DeserializeFragment(JsonObject obj)
    {
        var typeName = obj["$type"]?.GetValue<string>()
            ?? throw new ArgumentException("AST node is missing $type.");

        if (!TypesByName.TryGetValue(typeName, out var type))
        {
            throw new ArgumentException($"Unknown ScriptDOM type '{typeName}'.");
        }

        var fragment = (TSqlFragment)(Activator.CreateInstance(type, true)
            ?? RuntimeHelpers.GetUninitializedObject(type));

        foreach (var property in GetProperties(type))
        {
            if (property.Name is "StartLine" or "StartColumn" or "StartOffset" or "FragmentLength")
            {
                continue;
            }

            var jsonName = ToCamelCase(property.Name);
            if (!obj.TryGetPropertyValue(jsonName, out var node) || node is null)
            {
                continue;
            }

            try
            {
                Assign(property, fragment, node);
            }
            catch (ArgumentException)
            {
                // Some ScriptDOM properties are computed or have non-public setters.
            }
        }

        return fragment;
    }

    private static void Assign(PropertyInfo property, object target, JsonNode node)
    {
        var propertyType = property.PropertyType;

        if (typeof(TSqlFragment).IsAssignableFrom(propertyType))
        {
            if (property.CanWrite && node is JsonObject child)
            {
                property.SetValue(target, DeserializeFragment(child));
            }

            return;
        }

        if (propertyType.IsEnum && node is JsonValue && property.CanWrite)
        {
            var raw = node.GetValue<string>();
            property.SetValue(target, Enum.Parse(propertyType, raw, ignoreCase: true));
            return;
        }

        if (IsList(propertyType, out var itemType))
        {
            var list = property.GetValue(target) as IList;
            if (list is null && property.SetMethod is { IsPublic: true })
            {
                list = (IList?)Activator.CreateInstance(propertyType);
                property.SetValue(target, list);
            }

            if (list is null || node is not JsonArray array)
            {
                return;
            }

            list.Clear();
            foreach (var item in array)
            {
                if (item is null)
                {
                    continue;
                }

                list.Add(DeserializeItem(itemType, item));
            }

            return;
        }

        if (!property.CanWrite)
        {
            return;
        }

        property.SetValue(target, Coerce(propertyType, node));
    }

    private static object? DeserializeItem(Type itemType, JsonNode node)
    {
        if (typeof(TSqlFragment).IsAssignableFrom(itemType) && node is JsonObject obj)
        {
            return DeserializeFragment(obj);
        }

        if (itemType.IsEnum)
        {
            return Enum.Parse(itemType, node.GetValue<string>(), ignoreCase: true);
        }

        return Coerce(itemType, node);
    }

    private static object? Coerce(Type type, JsonNode node)
    {
        var underlying = Nullable.GetUnderlyingType(type) ?? type;
        if (underlying == typeof(string))
        {
            return node.GetValue<string>();
        }

        if (underlying == typeof(bool))
        {
            return node.GetValue<bool>();
        }

        if (underlying == typeof(int))
        {
            return node.GetValue<int>();
        }

        if (underlying == typeof(long))
        {
            return node.GetValue<long>();
        }

        if (underlying == typeof(decimal))
        {
            return node.GetValue<decimal>();
        }

        if (underlying.IsEnum)
        {
            return Enum.Parse(underlying, node.GetValue<string>(), ignoreCase: true);
        }

        if (typeof(TSqlFragment).IsAssignableFrom(underlying) && node is JsonObject obj)
        {
            return DeserializeFragment(obj);
        }

        return node.ToJsonString();
    }

    private static bool IsList(Type type, out Type itemType)
    {
        itemType = typeof(object);
        if (type == typeof(string) || !typeof(IEnumerable).IsAssignableFrom(type))
        {
            return false;
        }

        if (type.IsGenericType)
        {
            itemType = type.GetGenericArguments()[0];
            return true;
        }

        return false;
    }

    public static string ToCamelCase(string name)
    {
        if (string.IsNullOrEmpty(name) || char.IsLower(name[0]))
        {
            return name;
        }

        return char.ToLowerInvariant(name[0]) + name[1..];
    }
}
