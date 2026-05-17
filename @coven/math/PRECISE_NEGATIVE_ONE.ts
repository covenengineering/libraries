import type { Precise } from "./precise.ts";
import { PRECISE_ONE } from "./PRECISE_ONE.ts";
import { preciseNegate } from "./preciseNegate.ts";

/**
 * `Precise` representation of `-1`.
 */
export const PRECISE_NEGATIVE_ONE: Precise = preciseNegate(PRECISE_ONE);
