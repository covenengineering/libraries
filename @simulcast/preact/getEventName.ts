import {
	allow,
	buildUnicode,
	captureNamed,
	characterClass,
	END,
	getGroups,
	range,
	START,
	WORD,
} from "@coven/expression";

/**
 * Get event name out of string (or undefined otherwise).
 *
 * @example
 * ```typescript
 * getEventName("onExample"); // { name: "Example" }
 * getEventName("offExample"); // { name: undefined }
 * ```
 */
export const getEventName = getGroups<readonly ["name"]>(
	buildUnicode(
		START,
		"on",
		captureNamed("name")(characterClass(range("A")("Z")), allow(WORD)),
		END,
	),
);
