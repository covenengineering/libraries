import { PRECISE_ONE } from "./PRECISE_ONE.ts";
import { preciseAdd } from "./preciseAdd.ts";

/**
 * Given a `Precise` value, return the next value (`+1`).
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * preciseNext(precise(13n, 0n)); // precise(14n, 0n)
 * preciseNext(precise(42n, 0n)); // precise(43n, 0n)
 * ```
 * @see {@linkcode preciseAdd}
 * @see {@linkcode PRECISE_ONE}
 */
export const preciseNext = preciseAdd(PRECISE_ONE);
