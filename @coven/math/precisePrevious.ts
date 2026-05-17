import type { Unary } from "@coven/types";
import type { Precise } from "./precise.ts";
import { PRECISE_ONE } from "./PRECISE_ONE.ts";
import { preciseSubtract } from "./preciseSubtract.ts";

/**
 * Given a `Precise` value, return the previous value (`-1`).
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * precisePrevious(precise(13n, 0n)); // precise(12n, 0n)
 * precisePrevious(precise(42n, 0n)); // precise(41n, 0n)
 * ```
 * @see {@linkcode preciseSubtract}
 * @see {@linkcode PRECISE_ONE}
 */
export const precisePrevious: Unary<[left: Precise], Precise> =
	preciseSubtract(PRECISE_ONE);
