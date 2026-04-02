import { no } from "./no.ts";

/**
 * Rule to avoid `do..while` structures.
 */
export const noDoWhile: Deno.lint.Rule = no(
	"DoWhileStatement",
	"Avoid using `do..while`. Use utils from `@coven/iterables` or any modern looping method.",
);
