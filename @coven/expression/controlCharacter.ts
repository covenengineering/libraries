import { memo } from "@coven/memo";
import type { UppercaseLetters } from "./UppercaseLetters.ts";
import { escape } from "./escape.ts";

/**
 * Escaped control character in the form \cZ. This can range from \cA (SOH, char
 * code 1) to \cZ (SUB, char code 26).
 */
export const controlCharacter = memo(
	<const Character extends UppercaseLetters>(
		character: Character,
	): `\\c${Character}` => escape(`c${character}`),
);
