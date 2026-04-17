import type { Stringable } from "./Stringable.ts";

/**
 * Given an array of {@linkcode Stringable}, generate a type that will expect
 * those {@linkcode Stringable}s in the given order in a string.
 *
 * @example
 * ```typescript
 * type Example = ExpectedStringables<["a, b"]>; // `${string}a${string}b${string}`
 * ```
 * @template Stringables Expected {@linkcode Stringable}s.
 */
export type ExpectedStringables<Stringables extends ReadonlyArray<Stringable>> =
	Stringables extends (
		readonly [
			infer Head extends Stringable,
			...infer Tail extends ReadonlyArray<Stringable>,
		]
	) ?
		`${string}${Head}${ExpectedStringables<Tail>}`
	:	`${string}`;
