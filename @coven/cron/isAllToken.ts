import { is } from "@coven/predicates";
import type { Predicate } from "@coven/types";
import type { AllToken } from "./AllToken.ts";
import { ALL_TOKEN } from "./tokens.ts";

/**
 * Predicate to check if the given value is `"*"`.
 */
export const isAllToken: Predicate<unknown, AllToken> = is(ALL_TOKEN);
