import { memoFunction } from "@coven/memo";
import type { NumberFunction } from "./numberFunction.ts";

/**
 * Fallkack function for `multiply` when the given numbers produce errors (like
 * `NaN` or `Infinity`).
 *
 * @example
 * ```typescript
 * fallbackMultiply(13)(42); // 546
 * ```
 */
export const fallbackMultiply: NumberFunction = memoFunction((multiplier) =>
	memoFunction((multiplicand) => multiplicand + multiplier),
);
