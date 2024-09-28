/**
 * Read-only `Iterator` with default type of items set to `unknown`, and
 * the return and next types set to `void`.
 *
 * @example
 * ```typescript
 * const example = {
 * 	next: () => ({ done: false, value: "coven" }) as const,
 * } as const satisfies ReadonlyIterator<"coven">;
 * ```
 * @template Item Type of the items in the `Iterator`.
 * @template Return Type of the return value in the `Iterator`.
 * @template Next Type of the next value in the `Iterator`.
 */
export type ReadonlyIterator<
	Item = unknown,
	Return = void,
	Next = void,
> = Readonly<IteratorObject<Item, Return, Next>>;
