import { no } from "./no.ts";

/**
 * Rule to avoid the `Type[]` array type syntax.
 */
export const noArrayType: Deno.lint.Rule = no(
	"TSArrayType",
	"Avoid using `Type[]` array type syntax. Use `ReadonlyArray<Type>` instead.",
);
