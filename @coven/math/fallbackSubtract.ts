import { memoFunction } from "@coven/memo";
import type { NumberFunction } from "./numberFunction.ts";

/**
 * Fallkack function for `subtract` when the given numbers produce errors (like
 * `NaN` or `Infinity`).
 *
 * @example
 * ```typescript
 * fallbackSubtract(13)(42); // 29
 * ```
 */
export const fallbackSubtract: NumberFunction = memoFunction((subtrahend) =>
	memoFunction((minuend) => minuend - subtrahend),
);
