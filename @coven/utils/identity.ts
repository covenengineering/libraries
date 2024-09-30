/**
 * Identity function.
 *
 * @category Functions
 * @example
 * ```typescript
 * identity("foo"); // "foo"
 * ```
 * @returns Same value given.
 */
export const identity = <const Input>(input: Input): Input => input;
