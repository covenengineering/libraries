import { escape } from "./escape.ts";

/**
 * Matches any digit character. Equivalent to `[0-9]`.
 *
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Character_class_escape Character class escap})
 */
export const DIGIT: "\\d" = escape("d");

/**
 * Matches any character that isn't a digit. Equivalent to `[^0-9]`.
 *
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Character_class_escape Character class escap})
 */
export const NON_DIGIT: "\\D" = escape("D");

/**
 * Matches any word character, where a word character includes letters (A–Z,
 * a–z), numbers (0–9), and underscore (_). If the regex is
 * [Unicode-aware](https://coven.to/mdn/RegExp/unicode) and the
 * [`i`](https://coven.to/mdn/RegExp/ignoreCase) flag is set, it also matches
 * other Unicode characters that get canonicalized to one of the characters
 * above through
 * [case folding](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt).
 *
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Character_class_escape Character class escap})
 */
export const WORD: "\\w" = escape("w");

/**
 * Matches any character that is not a word character (A–Z,  a–z), numbers
 * (0–9), and underscore (_). If the regex is
 * [Unicode-aware](https://coven.to/mdn/RegExp/unicode) and the
 * [`i`](https://coven.to/mdn/RegExp/ignoreCase) flag is set, it also matches
 * other charactest that aren't Unicode and get canonicalized to one of the
 * characters above through
 * [case folding](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt).
 *
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Character_class_escape Character class escap})
 */
export const NON_WORD: "\\W" = escape("W");

/**
 * Matches any whitespace or line terminator character.
 *
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Character_class_escape Character class escap})
 */
export const WHITESPACE: "\\s" = escape("s");

/**
 * Matches any character that is not a whitespace or line terminator character.
 *
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Character_class_escape Character class escap})
 */
export const NON_WHITESPACE: "\\S" = escape("S");
