import type {
	EmptyString,
	ReadonlyArray,
	Stringable,
	StringJoin,
} from "@coven/types";
import { captureType } from "./captureType.ts";

/**
 * Specifies a group that can not match after the main expression (if it
 * matches, the result is discarded).
 */
export const notCaptureNext: <const Captured extends ReadonlyArray<Stringable>>(
	...captured: Captured
) => `(?!${StringJoin<Captured, EmptyString>})` = captureType("!");
