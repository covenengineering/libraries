/**
 * This type is useful for cases where a function needs to check if a certain
 * condition holds for an input value. For example, the type of a filtering
 * function that filters strings in an array of strings and numbers could look
 * like `Predicate<string | number, string>`.
 * @example
 * ```typescript
 * const isString: Predicate<number | string, string> = (
 * 	numberOrString,
 * ): numberOrString is string => typeof numberOrString === "string";
 * ```
 *
 * @template Input The type of the input value.
 * @template Predicated The subset of `Input` for which the predicate holds.
 * @param input The input value to check.
 * @returns `true` if the predicate holds for the input value, and `false`
 * otherwise.
 */
export type Predicate<Input, Predicated extends Input = Input> = (
	input: Input,
) => input is Predicated;
