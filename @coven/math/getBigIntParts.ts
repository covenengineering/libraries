import {
	buildUnicode,
	captureNamed,
	DIGIT,
	exists,
	getGroups,
	optional,
} from "@coven/expression";
import type { Stringable, Unary } from "@coven/types";
import type { BigIntParts } from "./BigIntParts.ts";
import type { BigIntPartsGroups } from "./BigIntPartsGroups.ts";

/**
 * Given a `bigint`, extract the `sign` (`"-"` or `""`) and the `digits` in 2
 * groups.
 *
 * @example
 * ```typescript
 * getBigIntParts(13n); // { sign: "", digits: "13" }
 * getBigIntParts(-42n); // { sign: "-", digits: "42" }
 * ```
 */
export const getBigIntParts: Unary<[stringable: Stringable], BigIntParts> =
	getGroups<BigIntPartsGroups>(
		buildUnicode(
			captureNamed("sign")(optional("-")),
			captureNamed("digits")(exists(DIGIT)),
		),
	);
