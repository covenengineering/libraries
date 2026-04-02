import { no } from "./no.ts";

/**
 * Rule to avoid `this`.
 */
export const noThis: Deno.lint.Rule = no(
	"ThisExpression",
	"Avoid using `this`. Use explicit values instead.",
);
