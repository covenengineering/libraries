import type { Memoizable } from "./Memoizable.ts";
import type { MemoizableRecord } from "./MemoizableRecord.ts";
import type { MemoizableTuple } from "./MemoizableTuple.ts";

/**
 * Memoized values are read-only to avoid mutations that would cause problems
 * with the object stored in memory.
 *
 * @template Type MemoizableObject value type to be memoized.
 * @example
 * ```ts
 * type MemoizedArray = Memoized<Array<{
 * 	coven: "engineering"
 * }>> // readonly { readonly coven: "engineering" }[]
 * type MemoizedTuple = Memoized<[{
 * 	coven: "engineering"
 * }]> // readonly [{ readonly coven: "engineering" }]
 * type MemoizedRecord = Memoized<{
 * 	coven: "engineering"
 * }> // { readonly coven: "engineering" }
 * ```
 */
export type Memoized<Type extends Memoizable> =
	Type extends MemoizableTuple ?
		Type[number] extends Memoizable ?
			"0" extends keyof Type ?
				Type["length"] extends 1 ? readonly [Memoized<Type[0]>]
				: Type extends [infer First, ...infer Rest] ?
					First extends Memoizable ?
						Rest extends MemoizableTuple ?
							readonly [Memoized<First>, ...Memoized<Rest>]
						:	never
					:	never
				:	never
			:	ReadonlyArray<Memoized<Type[number]>>
		:	never
	: Type extends MemoizableRecord ?
		{ readonly [Key in keyof Type]: Memoized<Type[Key]> }
	:	Type;
