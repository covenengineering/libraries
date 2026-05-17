/**
 * Type to make a read only type into a mutable type.
 *
 * @example
 * ```typescript
 * type Example1 = Mutable<{ readonly coven: "engineering" }>; // { coven: "engineering" }
 * type Example2 = Mutable<ReadonlyArray<number>>; // Array<number>
 * type Example3 = Mutable<readonly [coven: "engineering"]>; // [coven: "engineering"]
 * ```
 * @template ObjectOrArray Object or array to make mutable.
 */
export type Mutable<ObjectOrArray extends object | ReadonlyArray<unknown>> =
	ObjectOrArray extends ReadonlyArray<unknown> ? [...ObjectOrArray]
	:	{ -readonly [Property in keyof ObjectOrArray]: ObjectOrArray[Property] };
