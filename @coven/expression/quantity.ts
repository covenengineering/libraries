import { memo } from "@coven/memo";
import type { StringQuantity } from "./StringQuantity.ts";

/**
 * Matches the specified quantity of the previous token. {1,3} will match 1 to
 * 3. {3} will match exactly 3. {3,} will match 3 or more.
 */
export const quantity = memo(
	<const Quantities extends StringQuantity | number>(
		quantities: Quantities,
	): (<const Token extends string>(
		token: Token,
	) => `${Token}{${Quantities}}`) => memo(token => `${token}{${quantities}}`),
);
