import { no } from "./no.ts";

/**
 * Rule to avoid classes.
 */
export const noClass: Deno.lint.Rule = no(
	"ClassExpression",
	"Avoid using `class`. Use a function instead.",
);
