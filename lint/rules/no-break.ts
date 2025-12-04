import { no } from "../no.ts";

export const noBreak: Deno.lint.Rule = no(
	"BreakStatement",
	"Avoid using `break`. Use explicit control flow.",
);
