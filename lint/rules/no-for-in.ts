import { no } from "../no.ts";

export const noForIn: Deno.lint.Rule = no(
	"ForInStatement",
	"Avoid using `for..in`. Use utils from `@coven/iterables` or any modern looping method.",
);
