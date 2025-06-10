import {
	allow,
	buildUnicode,
	captureNamed,
	characterClass,
	disjunction,
	END,
	range,
	START,
	WORD,
} from "@coven/expression";
import type { Replace } from "@coven/types";

/**
 * Regular expression to detect `on` and `emit` event aliases.
 *
 * @example
 * ```typescript
 * eventRegExp.test("onExample"); // true
 * eventRegExp.test("on"); // false
 * eventRegExp.test("emitExample"); // true
 * eventRegExp.test("example"); // false
 * ```
 */
export const eventRegExp: Replace<
	RegExp,
	Readonly<{
		flags: "u";
		source: "^(?<type>emit|on)(?<name>[A-Z]\\w*)$";
	}>
> = buildUnicode(
	START,
	captureNamed("type")(disjunction("emit", "on")),
	captureNamed("name")(characterClass(range("A")("Z")), allow(WORD)),
	END,
);
