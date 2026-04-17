import {
	allow,
	buildUnicode,
	captureNamed,
	characterClass,
	disjunction,
	END,
	getGroups,
	range,
	START,
	WORD,
} from "@coven/expression";
import { Stringable } from "@coven/types";

/**
 * Get `on` and `emit` type from event aliases and name..
 *
 * @example
 * ```typescript
 * getEventTypeAndName("onExample"); // { type:"on", name: "Example" }
 * getEventTypeAndName("on"); // { type:undefined, name: undefined }
 * getEventTypeAndName("emitExample"); // { type:"emit", name: "Example" }
 * getEventTypeAndName("example"); // { type:undefined, name: undefined }
 * ```
 */
export const getEventTypeAndName: (
	stringable: Stringable,
) => Partial<Readonly<Record<"name" | "type", string>>> = getGroups<
	readonly ["type", "name"]
>(
	buildUnicode(
		START,
		captureNamed("type")(disjunction("emit", "on")),
		captureNamed("name")(characterClass(range("A")("Z")), allow(WORD)),
		END,
	),
);
