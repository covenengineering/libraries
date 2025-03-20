import type { Awaitable } from "./Awaitable.ts";
import type { ReadonlyArray } from "./ReadonlyArray.ts";

/**
 * Awaitable effect function.
 *
 * This function returns a Promise with a `void` value which means is not doing
 * a data transformation, but instead running some kind of async side-effect.
 *
 * @example
 * ```typescript
 * const awaitableEffect = (input => Promise.resolve(console.log(input))) satisfies AwaitableEffect<[input: number]>;
 * ```
 * @template Arguments Tuple of arguments.
 */
export type AwaitableEffect<Arguments extends ReadonlyArray> =
	Arguments extends readonly [] ? () => Awaitable<void>
	:	(..._: Arguments) => Awaitable<void>;
