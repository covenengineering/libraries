import type { MaybeInfinity } from "./MaybeInfinity.ts";

/**
 * Type to precisely represent a number as a tuple `[base, exponent]`.
 * It can be `[Infinity]`.
 */
export type Precise = readonly [base: MaybeInfinity, exponent?: bigint];
