import type { CLOSE_FOREGROUND } from "./CLOSE_FOREGROUND.ts";
import type { CurriedFormat } from "./CurriedFormat.ts";

/**
 * Foreground {@linkcode CurriedFormat} function.
 */
export type Foreground<Open extends number> = CurriedFormat<
	Open,
	typeof CLOSE_FOREGROUND
>;
