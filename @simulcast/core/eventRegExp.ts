import {
	ALL,
	allow,
	buildUnicode,
	captureNamed,
	END,
	or,
	START,
} from "@coven/expression";
import type { Replace } from "@coven/types";

/**
 * Regular expression to detect `on` and `emit` event aliases.
 *
 * @example
 * ```typescript
 * eventRegExp.test("onExample"); // true
 * eventRegExp.test("emitExample"); // true
 * eventRegExp.test("example"); // false
 * ```
 */
export const eventRegExp: Replace<RegExp, {
	readonly flags: "u";
	readonly source: "^(?<type>emit|on)(?<name>.*)$";
}> = buildUnicode(
	START,
	captureNamed("type")(or("emit", "on")),
	captureNamed("name")(allow(ALL)),
	END,
);
