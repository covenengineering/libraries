import type { MaybeInfinity } from "./MaybeInfinity.ts";

/**
 * Type to precisely represent a number as a tuple `[base, exponent]`.
 * It can be `[Infinity]`.
 */
export type Precise = Readonly<[base: MaybeInfinity, exponent?: bigint]>;
