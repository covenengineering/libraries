import { no } from "../no.ts";

export const noDefaultExport: Deno.lint.Rule = no(
	"ExportDefaultDeclaration",
	"Avoid using default exports. Use named exports instead.",
);
