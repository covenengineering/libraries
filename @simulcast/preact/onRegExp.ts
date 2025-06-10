import {
	allow,
	buildUnicode,
	captureNamed,
	characterClass,
	END,
	range,
	START,
	WORD,
} from "@coven/expression";
import type { Replace } from "@coven/types";

/**
 * Regular expression to capture properties starting with `"on"`.
 */
export const onRegExp: Replace<
	RegExp,
	Readonly<{ flags: "u"; source: "^on(?<name>[A-Z]\\w*)$" }>
> = buildUnicode(
	START,
	"on",
	captureNamed("name")(characterClass(range("A")("Z")), allow(WORD)),
	END,
);
