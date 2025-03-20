import { EMPTY_STRING } from "@coven/constants";
import { memo } from "@coven/memo";
import type {
	EmptyString,
	ReadonlyArray,
	Stringable,
	StringJoin,
} from "@coven/types";

/**
 * Util to join strings.
 */
export const join = memo(
	<const Tokens extends ReadonlyArray<Stringable>>(
		...tokens: Tokens
	): StringJoin<Tokens, EmptyString> =>
		tokens.join(EMPTY_STRING) as StringJoin<Tokens, EmptyString>,
);
