import type { Awaitable } from "./Awaitable.ts";

/**
 * Awaitable effect function.
 *
 * This function returns a Promise with a `void` value which means is not doing
 * a data transformation, but instead running some kind of async side-effect.
 *
 * @example
 * ```typescript
 * const awaitableEffect = (input => Promise.resolve(console.log(input))) satisfies AwaitableEffect<[input: string]>;
 * ```
 * @see {@linkcode https://coven.to/mdn/Promise Promise}
 * @see {@linkcode Awaitable}
 * @template Arguments Tuple of arguments.
 */
export type AwaitableEffect<Arguments extends ReadonlyArray<unknown>> =
	Arguments extends Readonly<[]> ? () => Awaitable<void>
	:	(..._: Arguments) => Awaitable<void>;
