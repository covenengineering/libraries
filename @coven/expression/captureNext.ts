import type { EmptyString, Stringable, StringJoin } from "@coven/types";
import { captureType } from "./captureType.ts";

/**
 * Matches a group after the main expression without including it in the result.
 */
export const captureNext: <const Captured extends ReadonlyArray<Stringable>>(
	...captured: Captured
) => `(?=${StringJoin<Captured, EmptyString>})` = captureType("=");
