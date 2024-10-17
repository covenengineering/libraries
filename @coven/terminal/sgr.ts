import { ESCAPE } from "./ESCAPE.ts";

/**
 * Takes an `input` number and returns the a SGR sequence.
 *
 * @example
 * ```typescript
 * sgr(13); // "[13m"
 * sgr(42); // "[42m"
 * ```
 * @see [SGR (Select Graphic Rendition) sequences](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR)
 * @param input Input to escape.
 * @returns SGR sequence.
 */
export const sgr = <const Input extends number>(
	input: Input,
): `${typeof ESCAPE}[${Input}m` => `${ESCAPE}[${input}m`;
