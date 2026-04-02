import { no } from "./no.ts";

/**
 * Rule to avoid `for..in` structures.
 */
export const noForIn: Deno.lint.Rule = no(
	"ForInStatement",
	"Avoid using `for..in`. Use utils from `@coven/iterables` or any modern looping method.",
);
