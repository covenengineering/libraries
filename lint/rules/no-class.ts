import { no } from "../no.ts";

export const noClass: Deno.lint.Rule = no(
	"ClassExpression",
	"Avoid using `class`. Use a function instead.",
);
