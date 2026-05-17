import { EXPONENT_MASK } from "./EXPONENT_MASK.ts";
import { EXPONENT_NAN } from "./EXPONENT_NAN.ts";
import type { Precise } from "./precise.ts";

/**
 * {@linkcode Precise} version of `NaN` (coefficient 0, exponent min - 1).
 */
export const PRECISE_NAN = (EXPONENT_NAN & EXPONENT_MASK) as Precise;
