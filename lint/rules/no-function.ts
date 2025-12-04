import { no } from "../no.ts";

export const noFunction: Deno.lint.Rule = no(
	"FunctionDeclaration",
	"Avoid using `function`. Use an arrow expression instead.",
);
