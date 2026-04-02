import { no } from "./no.ts";

/**
 * Rule to avoid `while` structures.
 */
export const noWhile: Deno.lint.Rule = no(
	"WhileStatement",
	"Avoid using `while`. Use utils from `@coven/iterables` or any modern looping method.",
);
