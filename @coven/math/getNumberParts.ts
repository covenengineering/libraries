import {
	buildUnicode,
	captureNamed,
	DIGIT,
	END,
	escape,
	exists,
	getGroups,
	group,
	optional,
	START,
} from "@coven/expression";
import type { Stringable, Unary } from "@coven/types";
import type { NumberParts } from "./NumberParts.ts";
import type { NumberPartsGroups } from "./NumberPartsGroups.ts";

/**
 * Get number parts {integral, fractional and exponent}.
 *
 * @example
 * ```typescript
 * getNumberParts("13"); // { integral: "13", fractional: undefined, exponent: undefined }
 * getNumberParts("13.42"); // { integral: "13", fractional: "42", exponent: undefined }
 * getNumberParts("13e42"); // { integral: "13", fractional: undefined, exponent: "42" }
 * getNumberParts("13.42e42"); // { integral: "13", fractional: "42", exponent: "42" }
 * getNumberParts("-13"); // { integral: "-13", fractional: undefined, exponent: undefined }
 * ```
 */
export const getNumberParts: Unary<[stringable: Stringable], NumberParts> =
	getGroups<NumberPartsGroups>(
		buildUnicode(
			START,
			group(
				captureNamed("integral")(optional("-"), exists(DIGIT)),
				optional(
					group(
						escape("."),
						captureNamed("fractional")(exists(DIGIT)),
					),
				),
			),
			optional(
				group(
					"e",
					captureNamed("exponent")(optional("-"), exists(DIGIT)),
				),
			),
			END,
		),
	);
