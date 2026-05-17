import type { Nullary } from "@coven/types";
import { always } from "@coven/utils";
import type { Precise } from "./precise.ts";
import { PRECISE_NAN } from "./PRECISE_NAN.ts";

/**
 * Fallback {@linkcode Nullary} that always returns {@linkcode PRECISE_NAN}
 * (used by division by zero and other invalid operations like that).
 *
 * @example
 * ```typescript
 * alwaysPreciseNaN(); // PRECISE_NAN
 * ```
 */
export const alwaysPreciseNaN: Nullary<Precise> = always(PRECISE_NAN);
