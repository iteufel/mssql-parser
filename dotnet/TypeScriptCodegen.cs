using System.Text;
using Microsoft.SqlServer.TransactSql.ScriptDom;

namespace Meta.MssqlParser;

internal static class TypeScriptCodegen
{
    public static string Generate()
    {
        var assembly = typeof(TSqlFragment).Assembly;
        var fragmentTypes = assembly.GetTypes()
            .Where(t => typeof(TSqlFragment).IsAssignableFrom(t) && t.IsClass)
            .OrderBy(t => t.Name)
            .ToList();

        var enums = assembly.GetTypes()
            .Where(t => t.IsEnum && t.Namespace == typeof(TSqlFragment).Namespace)
            .OrderBy(t => t.Name)
            .ToList();

        var sb = new StringBuilder();
        sb.AppendLine("/* eslint-disable */");
        sb.AppendLine("/* Generated from Microsoft.SqlServer.TransactSql.ScriptDom. Do not edit. */");
        sb.AppendLine();

        foreach (var e in enums)
        {
            var names = Enum.GetNames(e);
            sb.Append("export type ").Append(e.Name).Append(" = ");
            sb.Append(string.Join(" | ", names.Select(n => $"\"{n}\"")));
            sb.AppendLine(";");
        }

        sb.AppendLine();
        sb.AppendLine("export interface TSqlFragmentBase {");
        sb.AppendLine("  $type: string;");
        sb.AppendLine("  startLine?: number;");
        sb.AppendLine("  startColumn?: number;");
        sb.AppendLine("  startOffset?: number;");
        sb.AppendLine("  fragmentLength?: number;");
        sb.AppendLine("}");
        sb.AppendLine();

        foreach (var type in fragmentTypes)
        {
            if (type == typeof(TSqlFragment))
            {
                continue;
            }

            var baseType = type.BaseType is { } b && typeof(TSqlFragment).IsAssignableFrom(b) && b != typeof(TSqlFragment)
                ? b
                : null;
            var extendsName = baseType?.Name ?? "TSqlFragmentBase";
            // Concrete ScriptDom types each carry their own $type literal. A concrete
            // child cannot extend that literal, so drop it from the parent.
            var omitDiscriminator = !type.IsAbstract && baseType is { IsAbstract: false };
            sb.Append("export interface ").Append(type.Name);
            if (omitDiscriminator)
            {
                sb.Append(" extends Omit<").Append(extendsName).Append(", \"$type\">").AppendLine(" {");
            }
            else
            {
                sb.Append(" extends ").Append(extendsName).AppendLine(" {");
            }
            if (!type.IsAbstract)
            {
                sb.Append("  $type: \"").Append(type.Name).AppendLine("\";");
            }

            foreach (var property in FragmentJson.GetProperties(type))
            {
                if (property.DeclaringType != type)
                {
                    continue;
                }

                if (property.Name is "StartLine" or "StartColumn" or "StartOffset" or "FragmentLength")
                {
                    continue;
                }

                sb.Append("  ").Append(FragmentJson.ToCamelCase(property.Name)).Append("?: ");
                sb.Append(TsType(property.PropertyType)).AppendLine(";");
            }

            sb.AppendLine("}");
            sb.AppendLine();
        }

        var concrete = fragmentTypes.Where(t => !t.IsAbstract).Select(t => t.Name).ToList();
        sb.Append("export type TSqlFragment = ").Append(string.Join(" | ", concrete)).AppendLine(";");
        sb.AppendLine();
        sb.AppendLine("export type ParseError = { number: number; offset: number; line: number; column: number; message: string };");
        sb.AppendLine("export type Token = { type: string; text: string; offset: number; line: number; column: number };");
        return sb.ToString();
    }

    private static string TsType(Type type)
    {
        if (type == typeof(string))
        {
            return "string | null";
        }

        if (type == typeof(bool) || type == typeof(bool?))
        {
            return "boolean";
        }

        if (type == typeof(int) || type == typeof(int?) || type == typeof(long) || type == typeof(long?)
            || type == typeof(decimal) || type == typeof(decimal?))
        {
            return "number";
        }

        if (type.IsEnum)
        {
            return type.Name;
        }

        if (typeof(TSqlFragment).IsAssignableFrom(type))
        {
            return $"{type.Name} | null";
        }

        if (type.IsGenericType)
        {
            var item = type.GetGenericArguments()[0];
            if (typeof(System.Collections.IEnumerable).IsAssignableFrom(type) && type != typeof(string))
            {
                return $"{TsType(item).Replace(" | null", "")}[]";
            }
        }

        return "unknown";
    }
}
