import { EXPONENT_SIZE } from "./EXPONENT_SIZE.ts";

/**
 * Amount of possible values for the given exponent size.
 *
 * For example, for `8` bits, the exponent count is `256`, going from `00000000`
 * (or `0x00`) inclusive to `11111111` (or `0xff`).
 */
export const EXPONENT_COUNT: bigint = 1n << EXPONENT_SIZE;
