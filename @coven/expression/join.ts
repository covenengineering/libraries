import { EMPTY_STRING } from "@coven/constants";
import type {
	EmptyString,
	ReadonlyArray,
	Stringable,
	StringJoin,
} from "@coven/types";

/**
 * Util to join strings.
 */
export const join = <const Tokens extends ReadonlyArray<Stringable>>(
	...tokens: Tokens
): StringJoin<Tokens, EmptyString> =>
	tokens.join(EMPTY_STRING) as StringJoin<Tokens, EmptyString>;
