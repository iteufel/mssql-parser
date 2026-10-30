using Meta.MssqlParser;

if (args is ["codegen-ts", var outputPath])
{
    File.WriteAllText(outputPath, TypeScriptCodegen.Generate());
    return 0;
}

if (args is ["codegen-ts"])
{
    Console.Out.Write(TypeScriptCodegen.Generate());
    return 0;
}

string request;
if (args.Length > 0 && File.Exists(args[0]))
{
    request = File.ReadAllText(args[0]);
}
else
{
    request = Console.In.ReadToEnd();
}

if (string.IsNullOrWhiteSpace(request))
{
    Console.Error.WriteLine("Expected JSON request on stdin or a file path argument.");
    return 1;
}

try
{
    Console.Out.Write(ParserBridge.Handle(request));
    return 0;
}
catch (Exception ex)
{
    var escaped = ex.Message.Replace("\\", "\\\\").Replace("\"", "\\\"");
    Console.Out.Write($"{{\"ok\":false,\"message\":\"{escaped}\"}}");
    return 1;
}
