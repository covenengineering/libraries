import { memoFunction } from "@coven/memo";
import type { NumberFunction } from "./numberFunction.ts";

/**
 * Fallkack function for `add` when the given numbers produce errors (like
 * `NaN` or `Infinity`).
 *
 * @example
 * ```typescript
 * fallbackAdd(13)(42); // 55
 * ```
 */
export const fallbackAdd: NumberFunction = memoFunction((augend) =>
	memoFunction((addend) => addend + augend),
);
