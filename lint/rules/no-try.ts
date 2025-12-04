import { no } from "../no.ts";

export const noTry: Deno.lint.Rule = no(
	"TryStatement",
	"Avoid using `try`/`catch`. Use `attempt` from `@coven/parsers`, or a Promise.",
);
