import { noClass } from "./rules/no-class.ts";
import { noNull } from "./rules/no-null.ts";
import { noThis } from "./rules/no-this.ts";
import { noThrow } from "./rules/no-throw.ts";
import { noTry } from "./rules/no-try.ts";

export default {
	name: "coven",
	rules: {
		"no-class": noClass,
		"no-null": noNull,
		"no-this": noThis,
		"no-throw": noThrow,
		"no-try": noTry,
	},
} satisfies Deno.lint.Plugin;
