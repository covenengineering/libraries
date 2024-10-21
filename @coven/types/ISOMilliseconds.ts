import type { Digit } from "./Digit.ts";

/**
 * ISO milliseconds values in string format (from `"000"` to `"999"`).
 *
 * @example
 * ```typescript
 * const milliseconds = [
 * 	"001",
 * 	"250",
 * 	"999",
 * ] as const satisfies Iterable<ISOMilliseconds>;
 * ```
 * @see {@linkcode Digit}
 * @see [Date](https://mdn.io/Date)
 */
export type ISOMilliseconds = `${Digit}${Digit}${Digit}`;
