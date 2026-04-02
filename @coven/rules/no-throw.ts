import { no } from "./no.ts";

/**
 * Rule to avoid `throw` expressions.
 */
export const noThrow: Deno.lint.Rule = no(
	"ThrowStatement",
	"Avoid using `throw`. Return the error instead.",
);
