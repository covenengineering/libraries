import { no } from "../no.ts";

export const noContinue: Deno.lint.Rule = no(
	"ContinueStatement",
	"Avoid using `continue`. Use explicit control flow.",
);
