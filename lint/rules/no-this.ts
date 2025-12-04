import { no } from "../no.ts";

export const noThis: Deno.lint.Rule = no(
	"ThisExpression",
	"Avoid using `this`. Use explicit values instead.",
);
