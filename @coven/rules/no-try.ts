import { no } from "./no.ts";

/**
 * Rule to avoid `try` structures.
 */
export const noTry: Deno.lint.Rule = no(
	"TryStatement",
	"Avoid using `try`/`catch`. Use `attempt` from `@coven/parsers`, or a Promise.",
);
