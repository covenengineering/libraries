import { EXPONENT_MIN } from "./EXPONENT_MIN.ts";

/**
 * `PRECISE_NAN` exponent (1 lower than the minimum exponent).
 */
export const EXPONENT_NAN: bigint = EXPONENT_MIN - 1n;
