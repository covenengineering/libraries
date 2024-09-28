import type { CurriedFormat } from "./CurriedFormat.ts";

/**
 * Function that returns a {@link CurriedFormat} with `open` and `close` set.
 *
 * @template Open Open code.
 * @template Close Close code.
 */
export type FormatFunction = <
	const Open extends number,
	const Close extends number,
>(
	open: Open,
	close: Close,
) => CurriedFormat<Open, Close>;
