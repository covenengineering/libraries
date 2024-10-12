import { buildUnicode, DIGIT, END, quantity, START } from "@coven/expression";
import { test } from "@coven/predicates";
import { RANGE_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.ts";

/**
 * Regular expression to test if given string is a range.
 */
export const rangeStringTest: (text: string) => boolean = test(
	buildUnicode(
		START,
		quantity("1,2")(DIGIT),
		RANGE_EXPRESSION_SEPARATOR_TOKEN,
		quantity("1,2")(DIGIT),
		END,
	),
);
