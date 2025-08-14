import type { Nullary } from "@coven/types";
import { identity } from "./identity.ts";
import { thunk } from "./thunk.ts";

/**
 * Returns a function that always returns the same value.
 *
 * @example
 * ```typescript
 * const alwaysFoo = always("foo");
 *
 * [0, 1, 2].map(alwaysFoo); // ["foo", "foo", "foo"]
 * ```
 * @param input Input value to always return.
 * @returns Function that always return the given value.
 */
export const always: <const Input>(input: Input) => Nullary<Input> = thunk(
	identity,
);
