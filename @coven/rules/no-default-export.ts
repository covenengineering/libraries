import { no } from "./no.ts";

/**
 * Rule to avoid `export default`.
 */
export const noDefaultExport: Deno.lint.Rule = no(
	"ExportDefaultDeclaration",
	"Avoid using default exports. Use named exports instead.",
);
