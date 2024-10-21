import type { ReadonlyArray } from "./ReadonlyArray.ts";

/**
 * Effect function.
 *
 * This function returns `void` which means is not doing a data transformation,
 * but instead running some kind of side-effect.
 *
 * @example
 * ```typescript
 * const effect = (input => console.log(input)) satisfies Effect<[input: number]>;
 * ```
 * @template Arguments Tuple of arguments.
 */
export type Effect<Arguments extends ReadonlyArray> = Arguments extends
	readonly [] ? () => void : (..._: Arguments) => void;
