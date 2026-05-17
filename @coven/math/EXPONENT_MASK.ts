import { EXPONENT_COUNT } from "./EXPONENT_COUNT.ts";

/**
 * Exponent mask used for binary shifts (meaning the amount of "places" the
 * binary value will be moved to the left to accomodate for the exponent).
 */
export const EXPONENT_MASK: bigint = EXPONENT_COUNT - 1n;
