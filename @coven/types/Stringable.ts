import type { Primitive } from "./Primitive.ts";

/**
 * Values that can be stringified.
 *
 * @example
 * ```typescript
 * let value = "hello" as const satisfies Stringable;
 * value = 1;
 * value = true;
 * value = Symbol("hello"); // Error!
 * value = { toString: () => "hello" }; // Error!
 * ```
 * @see {@link Primitive}
 */
export type Stringable = Exclude<Primitive, symbol>;
