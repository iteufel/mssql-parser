using System.Runtime.InteropServices.JavaScript;
using System.Runtime.Versioning;

namespace Meta.MssqlParser;

[SupportedOSPlatform("browser")]
public static partial class JsExports
{
    [JSExport]
    public static string Parse(string sql, bool quotedIdentifier)
        => ParserBridge.Parse(sql, quotedIdentifier);

    [JSExport]
    public static string Generate(string astJson, string optionsJson)
    {
        var ast = System.Text.Json.Nodes.JsonNode.Parse(astJson)
            ?? throw new ArgumentException("ast is not valid JSON.");
        var options = string.IsNullOrWhiteSpace(optionsJson)
            ? null
            : System.Text.Json.Nodes.JsonNode.Parse(optionsJson)?.AsObject();
        return ParserBridge.Generate(ast, options);
    }

    [JSExport]
    public static string Tokenize(string sql, bool quotedIdentifier)
        => ParserBridge.Tokenize(sql, quotedIdentifier);
}
