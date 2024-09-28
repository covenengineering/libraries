import type { CLOSE_BACKGROUND } from "./constants.ts";
import type { CurriedFormat } from "./CurriedFormat.ts";

/**
 * Background {@link CurriedFormat} function.
 */
export type Background<Open extends number> = CurriedFormat<
	Open,
	typeof CLOSE_BACKGROUND
>;
