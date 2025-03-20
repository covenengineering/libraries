import {
	allow,
	buildUnicode,
	captureNamed,
	END,
	or,
	range,
	set,
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
	{
		readonly flags: "u";
		readonly source: "^(?<type>emit|on)(?<name>[A-Z]\\w*)$";
	}
> = buildUnicode(
	START,
	captureNamed("type")(or("emit", "on")),
	captureNamed("name")(set(range("A")("Z")), allow(WORD)),
	END,
);
