import type { Enumerate } from "./Enumerate.ts";
import type { NeverFallback } from "./NeverFallback.ts";

/**
 * Generates a range of numbers using {@linkcode Enumerate} from `From` to `To`.
 *
 * @example
 * ```typescript
 * type From5To10 = Range<5, 10>; // 5 | 6 | 7 | 8 | 9 | 10
 * type From5To10Alternative = Range<10, 5>; // 5 | 6 | 7 | 8 | 9 | 10
 * ```
 * @see {@linkcode Enumerate}
 * @see {@linkcode NeverFallback}
 * @template From Origin value (inclusive).
 * @template To Last value (inclusive).
 */
export type Range<From extends number = 0, To extends number = From> =
	From extends To ? From
		: From extends 0 ? Enumerate<To>
		: NeverFallback<
			Exclude<Enumerate<To>, Exclude<Enumerate<From>, From>>,
			Exclude<Enumerate<From>, Exclude<Enumerate<To>, To>>
		>;
