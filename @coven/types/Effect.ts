import type { Nullary } from "./Nullary.ts";

/**
 * Type to represent a function which returns `void`, meaning is not doing a
 * data transformation, but instead running some kind of side-effect.
 *
 * @example
 * ```typescript
 * const effect = (input => console.log(input)) satisfies Effect<[input: number]>;
 * ```
 * @template Arguments Tuple of arguments.
 */
export type Effect<Arguments extends ReadonlyArray<unknown> = Readonly<[]>> =
	Arguments extends Readonly<[]> ? Nullary<void> : (..._: Arguments) => void;
