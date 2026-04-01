import type { Nullary } from "./Nullary.ts";

/**
 * A safer alternative to `(...args: any[]) => any` or `Function` to represent a
 * function with N arity.
 *
 * @example
 * ```typescript
 * type Add = Multary<[addend: number, augend: number], number>;
 * // (addend: number, augend: number) => number
 * ```
 * @template Parameters Tuple to represent the function parameters.
 * @template Output Return type of the function.
 */
export type Multary<
	Parameters extends ReadonlyArray<unknown> = ReadonlyArray<never>,
	Output = unknown,
> =
	Parameters extends Readonly<[]> ? Nullary<Output>
	:	(...parameters: Parameters) => Output;
