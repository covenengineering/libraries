import { no } from "./no.ts";

/**
 * Rule to avoid `switch` structures.
 */
export const noSwitch: Deno.lint.Rule = no(
	"SwitchStatement",
	"Avoid using `switch`. Use a dictionary instead.",
);
