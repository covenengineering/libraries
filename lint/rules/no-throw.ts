import { no } from "../no.ts";

export const noThrow: Deno.lint.Rule = no(
	"ThrowStatement",
	"Avoid using `throw`. Return the error instead.",
);
