import type { Nullish } from "@coven/types";
import { isNull } from "./isNull.ts";

/**
 * Check if `input` is `undefined` or `null`.
 *
 * @example
 * ```typescript
 * isNullish(undefined); // true
 * isNullish(null); // true
 * isNullish(""); // false
 * isNullish(42); // false
 * ```
 * @returns `true` if nullish, `false` otherwise.
 */
// deno-lint-ignore coven/no-null
export const isNullish = (input: unknown = null): input is Nullish =>
	isNull(input);
