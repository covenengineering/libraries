import type { Primitive } from "./Primitive.ts";

/**
 * Values that can be stringified.
 *
 * @example
 * ```typescript
 * const string = "hello" as const satisfies Stringable;
 * const number = 1 as const satisfies Stringable;
 * const boolean = true as const satisfies Stringable;
 * ```
 * @see {@linkcode Primitive}
 */
export type Stringable = Exclude<Primitive, symbol>;
