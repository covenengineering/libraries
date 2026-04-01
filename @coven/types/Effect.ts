import type { Multary } from "./Multary.ts";

/**
 * Type to represent a function which returns `void`, meaning is not doing a
 * data transformation, but instead running some kind of side-effect.
 *
 * @example
 * ```typescript
 * const effect = (input => console.log(input)) satisfies Effect<[input: number]>;
 * ```
 * @template Parameters Tuple of parameters.
 */
export type Effect<Parameters extends ReadonlyArray<unknown> = Readonly<[]>> =
	Multary<Parameters, void>;
