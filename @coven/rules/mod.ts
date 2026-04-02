import { maxLines } from "./max-lines.ts";
import { noBreak } from "./no-break.ts";
import { noClass } from "./no-class.ts";
import { noContinue } from "./no-continue.ts";
import { noDefaultExport } from "./no-default-export.ts";
import { noDoWhile } from "./no-do-while.ts";
import { noEnum } from "./no-enum.ts";
import { noForIn } from "./no-for-in.ts";
import { noFunction } from "./no-function.ts";
import { noNull } from "./no-null.ts";
import { noSwitch } from "./no-switch.ts";
import { noThis } from "./no-this.ts";
import { noThrow } from "./no-throw.ts";
import { noTry } from "./no-try.ts";
import { noWhile } from "./no-while.ts";

/**
 * Coven Engineering lint rules. Add the code in the example to enable the rules
 * in your Deno project.
 *
 * Full list of rules:
 * - `max-lines`: Allow a max of `300` lines per file.
 * - `no-break`: Dissallow `break` statements.
 * - `no-class`: Dissallow classes.
 * - `no-continue`: Dissallow `continue` statements.
 * - `no-default-export`: Dissallow `export default` (use named instead).
 * - `no-do-while`: Dissallow `do..while` loops.
 * - `no-enum`: Dissallow `enum`.
 * - `no-for-in`: Dissallow `for..in` loops.
 * - `no-function`: Dissallow `function` (use `const` instead).
 * - `no-null`: Dissallow `null` (use `undefined` instead).
 * - `no-switch`: Dissallow `switch`.
 * - `no-this`: Dissallow `this`.
 * - `no-throw`: Dissallow `throw` statements.
 * - `no-try`: Dissallow `try` blocks.
 * - `no-while`: Dissallow `while` loops.
 *
 * @example
 * ```json
 * {
 * 	"plugins": ["jsr:@coven/rules"],
 * }
 * ```
 */
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
} as Deno.lint.Plugin;
