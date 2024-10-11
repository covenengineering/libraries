import { parseDecimal } from "@coven/parsers";
import { isUndefined } from "@coven/predicates";

/**
 * Predicate checking if given value is a number.
 */
export const isNumberString = <Value extends number>(
	input: string,
): input is `${Value}` => !isUndefined(parseDecimal(input));
