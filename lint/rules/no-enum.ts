import { no } from "../no.ts";

export const noEnum: Deno.lint.Rule = no(
	"TSEnumDeclaration",
	"Avoid using `enum`. Use union types or object literals instead.",
);
