/**
 * A value that might be coming from a `Promise` or might not, but can be
 * `await`ed. This type is specially useful when a code is "isomorphic
 * asynchronous", meaning it will handle both the asynchronous and synchronous
 * version of the same type.
 *
 * @example
 * ```typescript
 * const promisedValue = Promise.resolve("🧙‍♀️") satisfies Awaitable<string>;
 * const plainValue = "🔮" satisfies Awaitable<string>;
 *
 * Promise.all([promisedValue, plainValue]).then(console.log); // ["🧙‍♀️", "🔮"]
 * ```
 * @see [Promise](https://mdn.io/Promise)
 * @template Type The type to await.
 */
export type Awaitable<Type = unknown> = Readonly<PromiseLike<Type> | Type>;
