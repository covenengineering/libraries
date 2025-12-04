import { no } from "../no.ts";

export const noWhile: Deno.lint.Rule = no(
	"WhileStatement",
	"Avoid using `while`. Use utils from `@coven/iterables` or any modern looping method.",
);
