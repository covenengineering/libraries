import { no } from "./no.ts";

/**
 * Rule to avoid `function` (encouraging arrow functions instead).
 */
export const noFunction: Deno.lint.Rule = no(
	"FunctionDeclaration",
	"Avoid using `function`. Use an arrow expression instead.",
);
