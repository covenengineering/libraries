import type { ReadonlyArray, Stringable, StringJoin } from "@coven/types";
import { join } from "./join.ts";

/**
 * Match any character in the set.
 */
export const set = <const Tokens extends ReadonlyArray<Stringable>>(
	...tokens: Tokens
): `[${StringJoin<[...Tokens], "">}]` => `[${join(...tokens)}]`;
