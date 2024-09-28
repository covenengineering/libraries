import type { CLOSE_FOREGROUND } from "./constants.ts";
import type { CurriedFormat } from "./CurriedFormat.ts";

/**
 * Foreground {@link CurriedFormat} function.
 */
export type Foreground<Open extends number> = CurriedFormat<
	Open,
	typeof CLOSE_FOREGROUND
>;
