import type {
	EmptyString,
	ReadonlyArray,
	Stringable,
	StringJoin,
} from "@coven/types";
import { captureType } from "./captureType.ts";

/**
 * Groups multiple tokens together without creating a capture group.
 */
export const group: <const Captured extends ReadonlyArray<Stringable>>(
	...captured: Captured
) => `(?:${StringJoin<Captured, EmptyString>})` = captureType(":");
