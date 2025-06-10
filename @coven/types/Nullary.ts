/**
 * Nullary function, meaning a function that takes no arguments, ideal for
 * thunks.
 *
 * @example
 * ```typescript
 * const greet = (() => "hi") satisfies Nullary<"hi">;
 * ```
 * @template ReturnType Type of the output of the nullary function.
 */
export type Nullary<ReturnType> = () => ReturnType;
