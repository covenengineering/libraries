import { no } from "../no.ts";

export const noSwitch: Deno.lint.Rule = no(
	"SwitchStatement",
	"Avoid using `switch`. Use a dictionary instead.",
);
