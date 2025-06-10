import { escape } from "./escape.ts";

/**
 * Asserts that the current position is the start of input (more precisely, the
 * character to the left is out of bounds of the string). If the [`m`](https://coven.to/mdn/RegExp/multiline) flag is set, this also matches if the
 * character to the left is a line terminator. Unlike other
 * [character escapes](https://coven.to/mdn/Regular_expressions/Character_escape)
 * or [character class escapes](https://coven.to/mdn/Regular_expressions/Character_class_escape),
 * it doesn't  consume any characters.
 *
 * Unless the `m` flag is set, this assertion only make sense when placed at the
 * start boundary of the pattern, because any other characters to the left of it
 * would necessarily cause the assertion to fail.
 *
 * The `y` flag doesn't change the meaning of this assertion.
 *
 * @see [Input boundary assertion](https://coven.to/mdn/Regular_expressions/Input_boundary_assertion)
 */
export const START = "^";

/**
 * Asserts that the current position is the end of input (more precisely, the
 * character to the right is out of bounds of the string). If the [`m`](https://coven.to/mdn/RegExp/multiline) flag is set, this also matches if the
 * character to the right is a line terminator. Unlike other
 * [character escapes](https://coven.to/mdn/Regular_expressions/Character_escape)
 * or [character class escapes](https://coven.to/mdn/Regular_expressions/Character_class_escape),
 * it doesn't  consume any characters.
 *
 * Unless the `m` flag is set, this assertion only make sense when placed at the
 * end boundary of the pattern, because any other characters to the right of it
 * would necessarily cause the assertion to fail.
 *
 * The `y` flag doesn't change the meaning of this assertion.
 *
 * @see [Input boundary assertion](https://coven.to/mdn/Regular_expressions/Input_boundary_assertion)
 */
export const END = "$";

/**
 * Asserts that the current position in the string is a word boundary. Unlike
 * other [character escapes](https://coven.to/mdn/Regular_expressions/Character_escape)
 * or [character class escapes](https://coven.to/mdn/Regular_expressions/Character_class_escape),
 * it doesn't  consume any characters.
 *
 * A word character includes the following:
 *
 * - Letters (`A–Z`, `a–z`), numbers (`0–9`), and underscore (`_`).
 * - If the regex is [Unicode-aware](https://coven.to/mdn/RegExp/unicode) and
 * the [`i`](https://coven.to/mdn/RegExp/ignoreCase) flag is set, other Unicode
 * characters that get canonicalized to one of the characters above through
 * [case folding](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt).
 *
 * Word characters are also matched by the `\w` [character class escape](https://coven.to/mdn/Regular_expressions/Character_class_escape).
 *
 * Out-of-bounds input positions are considered non-word characters
 *
 * @see [Word boundary assertion](https://coven.to/mdn/Regular_expressions/Word_boundary_assertion)
 */
export const WORD_BOUNDARY: "\\b" = escape("b");

/**
 * Asserts that the current position is not a word boundary. Unlike other
 * [character escapes](https://coven.to/mdn/Regular_expressions/Character_escape)
 * or [character class escapes](https://coven.to/mdn/Regular_expressions/Character_class_escape),
 * it doesn't  consume any characters.
 *
 * A word character includes the following:
 *
 * - Letters (`A–Z`, `a–z`), numbers (`0–9`), and underscore (`_`).
 * - If the regex is [Unicode-aware](https://coven.to/mdn/RegExp/unicode) and
 * the [`i`](https://coven.to/mdn/RegExp/ignoreCase) flag is set, other Unicode
 * characters that get canonicalized to one of the characters above through
 * [case folding](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt).
 *
 * Word characters are also matched by the `\w` [character class escape](https://coven.to/mdn/Regular_expressions/Character_class_escape).
 *
 * Out-of-bounds input positions are considered non-word characters
 *
 * @see [Word boundary assertion](https://coven.to/mdn/Regular_expressions/Word_boundary_assertion)
 */
export const NON_WORD_BOUNDARY: "\\B" = escape("B");
