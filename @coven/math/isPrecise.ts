import { isArray, isBigInt } from "@coven/predicates";
import type { Precise } from "./precise.ts";

/**
 * Predicate to determine if the given value is a {@linkcode Precise}.
 *
 * @example
 * ```typescript
 * isPrecise([]); // false
 * isPrecise(13); // false
 * isPrecise([13, 42]); // false
 * isPrecise([13n, 42]); // false
 * isPrecise([13, 42n]); // false
 * isPrecise([13n, 42n]); // true
 * ```
 * @param value Value to check.
 * @returns `true` if value is a `Precise`, `false` otherwise.
 */
export const isPrecise = (value: unknown): value is Precise =>
	isArray(value)
	&& value.length === 2
	&& isBigInt(value[0])
	&& isBigInt(value[1]);
