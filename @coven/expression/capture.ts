import type {
	EmptyString,
	ReadonlyArray,
	Stringable,
	StringJoin,
} from "@coven/types";
import { join } from "./join.ts";

/**
 * Groups multiple tokens together and creates a capture group for extracting a
 * substring or using a back reference.
 */
export const capture = <const Captured extends ReadonlyArray<Stringable>>(
	...captured: Captured
): `(${StringJoin<Captured, EmptyString>})` =>
	`(${join(...captured)})` as `(${StringJoin<Captured, EmptyString>})`;
