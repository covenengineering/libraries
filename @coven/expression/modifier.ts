import { memo } from "@coven/memo";
import type { Stringable, StringJoin } from "@coven/types";
import { captureType } from "./captureType.ts";
import type { ModifierFlags } from "./ModifierFlags.ts";

/**
 * Overrides [flag](https://coven.to/mdn/Reference/Regular_expressions) settings
 * in a specific part of a regular expression. It can be used to enable or
 * disable flags that change the meanings of certain regex syntax elements.
 * These flags are [`i`](https://coven.to/mdn/RegExp/ignoreCase),
 * [`m`](https://coven.to/mdn/RegExp/multiline), and
 * [`s`](https://coven.to/mdn/RegExp/dotAll).
 *
 * @example Create modifier with `i`, `m` and `s` flags
 * ```typescript
 * modifier("ims")("✨", "🔮", "💀"); // "(?ims:✨🔮💀)"
 * modifier("i-ms")("✨", "🔮", "💀"); // "(?i-ms:✨🔮💀)"
 * modifier("-i")("✨", "🔮", "💀"); // "(?-i:✨🔮💀)"
 * ```
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Modifier Modifier}
 * @param flags Flags to enable or disable
 * @returns Curried function with `flags` in context.
 */
export const modifier: <
	Flags extends ModifierFlags | `${ModifierFlags | ""}-${ModifierFlags}`,
>(
	flags: Flags,
) => /**
 * @param pattern Pattern to apply modified flags to.
 * @returns Modifier with given `flags` and `pattern`.
 */ <const Pattern extends ReadonlyArray<Stringable>>(
	...pattern: Pattern
) => `(?${Flags}:${StringJoin<Pattern>})` = memo((flags) =>
	captureType(`${flags}:`)
);
