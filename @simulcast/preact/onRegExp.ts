import {
	allow,
	buildUnicode,
	captureNamed,
	END,
	range,
	set,
	START,
	WORD,
} from "@coven/expression";
import type { Replace } from "@coven/types";

/**
 * Regular expression to capture properties starting with `"on"`.
 */
export const onRegExp: Replace<
	RegExp,
	{
		readonly flags: "u";
		readonly source: "^on(?<name>[A-Z]\\w*)$";
	}
> = buildUnicode(
	START,
	"on",
	captureNamed("name")(set(range("A")("Z")), allow(WORD)),
	END,
);
