import { memo } from "@coven/memo";
import type {
	EmptyString,
	ReadonlyArray,
	Stringable,
	StringJoin,
} from "@coven/types";
import { START } from "./constants.ts";
import { set } from "./set.ts";

/**
 * Match any character that is not in the set.
 */
export const notSet = memo(
	<const Tokens extends ReadonlyArray<Stringable>>(
		...tokens: Tokens
	): `[${StringJoin<["^", ...Tokens], EmptyString>}]` =>
		set(START, ...tokens),
);
