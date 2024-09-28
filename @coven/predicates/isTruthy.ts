import type { Falsy } from "@coven/types";
import { isFalsy } from "./isFalsy.ts";

/**
 * Check if given `input` is truthy (so not 0, NaN, "", false, or nullish).
 *
 * @example
 * ```typescript
 * isTruthy(42); // true
 * isTruthy(true); // true
 * isTruthy(false); // false
 * isTruthy(0); // false
 * ```
 * @param input Value to check.
 * @returns Returns `true` if truthy, `false` otherwise.
 */
export const isTruthy = <Input>(
	input: Input,
): input is Exclude<Input, Falsy> => !isFalsy(input);
