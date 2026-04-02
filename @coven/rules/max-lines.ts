import { no } from "./no.ts";

const LINE_LIMIT = 300;

/**
 * Rule to avoid going over the give {@linkcode LINE_LIMIT} of lines.
 */
export const maxLines: Deno.lint.Rule = no(
	"Program",
	`Avoid large files. Split this into smaller files (${LINE_LIMIT} lines or less).`,
	({ context }) => context.sourceCode.text.split("\n").length > LINE_LIMIT,
);
