import type { IndexArray } from "./IndexArray.ts";

/**
 * Recursively generates a type with an union of numbers from `0` to `To`.
 * This is expensive and has the same limit TypeScript has for recursive types.
 *
 * @example
 * ```typescript
 * type From0To10 = Enumerate<10>; // 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
 * ```
 * @template To Last number of the union (starts at `0`).
 */
export type Enumerate<To extends number = 0> = To extends 0 ? To
	: IndexArray<To>[keyof IndexArray<To> & number] | To;
