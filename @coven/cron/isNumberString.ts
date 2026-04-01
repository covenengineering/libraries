import { memoFunction } from "@coven/memo";
import { parseDecimal } from "@coven/parsers";
import { isNumber } from "@coven/predicates";

/**
 * Predicate checking if given value is a number.
 */
export const isNumberString: <Value extends number>(
	input: string,
) => input is `${Value}` = memoFunction(
	<Value extends number>(input: string): input is `${Value}` =>
		isNumber(parseDecimal(input)),
);
