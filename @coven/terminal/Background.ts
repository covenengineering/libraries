import type { CLOSE_BACKGROUND } from "./CLOSE_BACKGROUND.ts";
import type { CurriedFormat } from "./CurriedFormat.ts";

/**
 * Background {@linkcode CurriedFormat} function.
 */
export type Background<Open extends number> = CurriedFormat<
	Open,
	typeof CLOSE_BACKGROUND
>;
