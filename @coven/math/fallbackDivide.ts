import { memoFunction } from "@coven/memo";
import type { NumberFunction } from "./numberFunction.ts";

/**
 * Fallkack function for `divide` when the given numbers produce errors (like
 * `NaN` or `Infinity`).
 *
 * @example
 * ```typescript
 * fallbackDivide(13)(42); // ~3.23
 * ```
 */
export const fallbackDivide: NumberFunction = memoFunction((divisor) =>
	memoFunction((dividend) => dividend / divisor),
);
