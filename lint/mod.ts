import { maxLines } from "./rules/max-lines.ts";
import { noBreak } from "./rules/no-break.ts";
import { noClass } from "./rules/no-class.ts";
import { noContinue } from "./rules/no-continue.ts";
import { noDefaultExport } from "./rules/no-default-export.ts";
import { noDoWhile } from "./rules/no-do-while.ts";
import { noEnum } from "./rules/no-enum.ts";
import { noForIn } from "./rules/no-for-in.ts";
import { noFunction } from "./rules/no-function.ts";
import { noNull } from "./rules/no-null.ts";
import { noSwitch } from "./rules/no-switch.ts";
import { noThis } from "./rules/no-this.ts";
import { noThrow } from "./rules/no-throw.ts";
import { noTry } from "./rules/no-try.ts";
import { noWhile } from "./rules/no-while.ts";

// deno-lint-ignore coven/no-default-export
export default {
	name: "coven",
	rules: {
		"max-lines": maxLines,
		"no-break": noBreak,
		"no-class": noClass,
		"no-continue": noContinue,
		"no-default-export": noDefaultExport,
		"no-do-while": noDoWhile,
		"no-enum": noEnum,
		"no-for-in": noForIn,
		"no-function": noFunction,
		"no-null": noNull,
		"no-switch": noSwitch,
		"no-this": noThis,
		"no-throw": noThrow,
		"no-try": noTry,
		"no-while": noWhile,
	},
} satisfies Deno.lint.Plugin;
