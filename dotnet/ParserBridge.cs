using System.Text.Json;
using System.Text.Json.Nodes;
using Microsoft.SqlServer.TransactSql.ScriptDom;

namespace Meta.MssqlParser;

internal static class ParserBridge
{
    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        WriteIndented = false,
    };

    public static string Handle(string requestJson)
    {
        var request = JsonNode.Parse(requestJson)?.AsObject()
            ?? throw new ArgumentException("Request must be a JSON object.");
        var op = request["op"]?.GetValue<string>()
            ?? throw new ArgumentException("Request is missing op.");

        return op switch
        {
            "parse" => Parse(
                request["sql"]?.GetValue<string>() ?? "",
                request["quotedIdentifier"]?.GetValue<bool>() ?? true),
            "generate" => Generate(
                request["ast"] ?? throw new ArgumentException("generate requires ast."),
                request["options"] as JsonObject),
            "tokenize" => Tokenize(
                request["sql"]?.GetValue<string>() ?? "",
                request["quotedIdentifier"]?.GetValue<bool>() ?? true),
            "codegen-ts" => TypeScriptCodegen.Generate(),
            _ => throw new ArgumentException($"Unknown op '{op}'."),
        };
    }

    public static string Parse(string sql, bool quotedIdentifier)
    {
        if (sql.Length > 0 && sql[0] == '\uFEFF')
        {
            sql = sql[1..];
        }

        var parser = new TSql170Parser(quotedIdentifier);
        using var reader = new StringReader(sql);
        var fragment = parser.Parse(reader, out var errors);

        var payload = new JsonObject
        {
            ["errors"] = SerializeErrors(errors),
            ["ast"] = fragment is null ? null : FragmentJson.Serialize(fragment),
        };
        return payload.ToJsonString(JsonOptions);
    }

    public static string Generate(JsonNode ast, JsonObject? options)
    {
        var fragment = FragmentJson.Deserialize(ast);
        var generatorOptions = new SqlScriptGeneratorOptions
        {
            SqlVersion = SqlVersion.Sql170,
            AlignClauseBodies = options?["alignClauseBodies"]?.GetValue<bool>() ?? true,
            IncludeSemicolons = options?["includeSemicolons"]?.GetValue<bool>() ?? true,
            KeywordCasing = ParseKeywordCasing(options?["keywordCasing"]?.GetValue<string>()),
        };

        var generator = new Sql170ScriptGenerator(generatorOptions);
        generator.GenerateScript(fragment, out var script);
        var payload = new JsonObject { ["sql"] = script };
        return payload.ToJsonString(JsonOptions);
    }

    public static string Tokenize(string sql, bool quotedIdentifier)
    {
        if (sql.Length > 0 && sql[0] == '\uFEFF')
        {
            sql = sql[1..];
        }

        var parser = new TSql170Parser(quotedIdentifier);
        using var reader = new StringReader(sql);
        var fragment = parser.Parse(reader, out _);
        var tokens = new JsonArray();
        if (fragment?.ScriptTokenStream is not null)
        {
            foreach (var token in fragment.ScriptTokenStream)
            {
                tokens.Add(new JsonObject
                {
                    ["type"] = token.TokenType.ToString(),
                    ["text"] = token.Text,
                    ["offset"] = token.Offset,
                    ["line"] = token.Line,
                    ["column"] = token.Column,
                });
            }
        }

        return new JsonObject { ["tokens"] = tokens }.ToJsonString(JsonOptions);
    }

    private static JsonArray SerializeErrors(IList<ParseError> errors)
    {
        var array = new JsonArray();
        foreach (var error in errors)
        {
            array.Add(new JsonObject
            {
                ["number"] = error.Number,
                ["offset"] = error.Offset,
                ["line"] = error.Line,
                ["column"] = error.Column,
                ["message"] = error.Message,
            });
        }

        return array;
    }

    private static KeywordCasing ParseKeywordCasing(string? value)
    {
        return value?.ToLowerInvariant() switch
        {
            "lower" => KeywordCasing.Lowercase,
            "pascal" => KeywordCasing.PascalCase,
            _ => KeywordCasing.Uppercase,
        };
    }
}
