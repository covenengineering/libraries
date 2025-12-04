import { no } from "../no.ts";

const LINE_LIMIT = 300;

export const maxLines: Deno.lint.Rule = no(
	"Program",
	`Avoid large files. Split this into smaller files (${LINE_LIMIT} lines or less).`,
	({ context }) => context.sourceCode.text.split("\n").length > LINE_LIMIT,
);
