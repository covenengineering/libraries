import type { Nullary } from "./Nullary.ts";

/**
 * Asynchronous {@linkcode Nullary}, a function that takes no arguments and
 * returns a `Promise`.
 *
 * @example
 * ```typescript
 * const asyncGreet = (() => Promise.resolve("hi")) satisfies AsyncNullary<"hi">;
 * ```
 * @template ReturnType Type of the output of the nullary function (will be wrapped in a `Promise`).
 */
export type AsyncNullary<ReturnType> = Nullary<Promise<ReturnType>>;
