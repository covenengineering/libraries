/**
 * Union of `AsyncGenerator` and `Generator`.
 *
 * @example
 * ```typescript
 * const generator: AwaitableGenerator<number> = (function* () {
 * 	yield 13;
 * })();
 * export const asyncGenerator: AwaitableGenerator<number> = (async function* () {
 * 	yield 13;
 * })();
 * ```
 * @template Item Type of the items in the `AwaitableGenerator`.
 * @template Return Type of the return value in the `AwaitableGenerator`.
 * @template Next Type of the next value in the `AwaitableGenerator`.
 */
export type AwaitableGenerator<
	Item = unknown,
	Return = unknown,
	Next = unknown,
> = AsyncGenerator<Item, Return, Next> | Generator<Item, Return, Next>;
