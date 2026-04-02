import { no } from "./no.ts";

/**
 * Rule to avoid the `break` statement.
 */
export const noBreak: Deno.lint.Rule = no(
	"BreakStatement",
	"Avoid using `break`. Use explicit control flow.",
);
