import { is } from "@coven/predicates";
import type { AllToken } from "./AllToken.ts";
import { ALL_TOKEN } from "./tokens.ts";

/**
 * Predicate to check if the given value is `"*"`.
 */
export const isAllToken: (actual: unknown) => actual is AllToken = is(
	ALL_TOKEN,
);
