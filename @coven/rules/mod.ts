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
 * - `no-break`: Disallow `break` statements.
 * - `no-class`: Disallow classes.
 * - `no-continue`: Disallow `continue` statements.
 * - `no-default-export`: Disallow `export default` (use named instead).
 * - `no-do-while`: Disallow `do..while` loops.
 * - `no-enum`: Disallow `enum`.
 * - `no-for-in`: Disallow `for..in` loops.
 * - `no-function`: Disallow `function` (use `const` instead).
 * - `no-null`: Disallow `null` (use `undefined` instead).
 * - `no-switch`: Disallow `switch`.
 * - `no-this`: Disallow `this`.
 * - `no-throw`: Disallow `throw` statements.
 * - `no-try`: Disallow `try` blocks.
 * - `no-while`: Disallow `while` loops.
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
