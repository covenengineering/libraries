import type {
	EmptyString,
	ReadonlyArray,
	Stringable,
	StringJoin,
} from "@coven/types";
import { capture } from "./capture.ts";
import { join } from "./join.ts";

/**
 * Helper for all groups that start with `?`.
 */
export const captureType = <const Type extends Stringable>(
	type: Type,
): <const Captured extends ReadonlyArray<Stringable>>(
	...captured: Captured
) => `(?${Type}${StringJoin<Captured, EmptyString>})` =>
<const Captured extends ReadonlyArray<Stringable>>(...captured: Captured) =>
	capture(
		`?${type}${join(...captured)}`,
	) as `(?${Type}${StringJoin<Captured, EmptyString>})`;
