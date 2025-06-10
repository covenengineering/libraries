import { memo } from "@coven/memo";
import type { UppercaseLetters } from "./UppercaseLetters.ts";
import { escape } from "./escape.ts";

/**
 * Represents the control character with value equal to the letter's character
 * value modulo 32. For example, `\cJ` represents line break (`\n`), because the
 * code point of `J` is 74, and 74 modulo 32 is 10, which is the code point of
 * line break.
 *
 * @example
 * ```typescript
 * controlCharacter("J"); // "\cJ"
 * ```
 * @see [Character escape](https://coven.to/mdn/Regular_expressions/Character_escape)
 * @param character Control character.
 * @returns Control character.
 */
export const controlCharacter: <const Character extends UppercaseLetters>(
	character: Character,
) => `\\c${Character}` = memo(character => escape(`c${character}`));
