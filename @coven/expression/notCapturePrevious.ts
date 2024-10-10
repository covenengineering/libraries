import type { EmptyString, Stringable, StringJoin } from "@coven/types";
import { captureType } from "./captureType.ts";

/**
 * Specifies a group that can not match before the main expression (if it
 * matches, the result is discarded).
 */
export const notCapturePrevious: <
	const Captured extends ReadonlyArray<Stringable>,
>(
	...captured: Captured
) => `(?<!${StringJoin<Captured, EmptyString>})` = captureType("<!");
