import { no } from "./no.ts";

/**
 * Rule to avoid the `continue` expression.
 */
export const noContinue: Deno.lint.Rule = no(
	"ContinueStatement",
	"Avoid using `continue`. Use explicit control flow.",
);
