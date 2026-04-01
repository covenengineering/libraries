import type { Awaitable } from "./Awaitable.ts";
import type { Multary } from "./Multary.ts";

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
 * @template Parameters Tuple of parameters.
 */
export type AwaitableEffect<
	Parameters extends ReadonlyArray<unknown> = Readonly<[]>,
> = Multary<Parameters, Awaitable<void>>;
