import { memo } from "@coven/memo";
import type {
	EmptyString,
	ReadonlyArray,
	Stringable,
	StringJoin,
} from "@coven/types";
import { join } from "./join.ts";

/**
 * Match any character in the set.
 */
export const set = memo(
	<const Tokens extends ReadonlyArray<Stringable>>(
		...tokens: Tokens
	): `[${StringJoin<[...Tokens], EmptyString>}]` => `[${join(...tokens)}]`,
);
