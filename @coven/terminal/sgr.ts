import { memo } from "@coven/memo";
import { ESCAPE } from "./ESCAPE.ts";

/**
 * Takes an `input` number and returns the a SGR sequence.
 *
 * @example
 * ```typescript
 * sgr(13); // "[13m"
 * sgr(42); // "[42m"
 * ```
 * @see {@linkcode https://en.wikipedia.org/wiki/ANSI_escape_code#SGR SGR (Select Graphic Rendition) sequence}
 * @param input Input to escape.
 * @returns SGR sequence.
 */
export const sgr: <const Input extends number>(
	input: Input,
) => `${typeof ESCAPE}[${Input}m` = memo((input) => `${ESCAPE}[${input}m`);
