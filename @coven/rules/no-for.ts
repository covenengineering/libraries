import { no } from "./no.ts";

/**
 * Rule to avoid `for` loops.
 */
export const noFor: Deno.lint.Rule = no(
	"ForStatement",
	"Avoid using `for`. Use utils from `@coven/iterables` or any modern looping method.",
);
