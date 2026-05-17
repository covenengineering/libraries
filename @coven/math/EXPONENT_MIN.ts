import { EXPONENT_MASK } from "./EXPONENT_MASK.ts";

/**
 * Minimum possible exponent for `Precise` values minus `1`, which is reserved
 * for `PRECISE_NAN`.
 */
export const EXPONENT_MIN: bigint = -(EXPONENT_MASK - 1n);
