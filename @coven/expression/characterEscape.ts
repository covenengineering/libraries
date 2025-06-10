import { escape } from "./escape.ts";

/**
 * Matches a NULL character (`U+0000`).
 *
 * @see [Character escape](https://coven.to/mdn/Regular_expressions/Character_escape)
 */
export const NULL: "\\0" = escape("0");

/**
 * Matches a TAB character (`U+0009`).
 *
 * @see [Character escape](https://coven.to/mdn/Regular_expressions/Character_escape)
 */
export const HORIZONTAL_TAB: "\\t" = escape("t");

/**
 * Matches a LINE FEED character (`U+000A`).
 *
 * @see [Character escape](https://coven.to/mdn/Regular_expressions/Character_escape)
 */
export const LINE_FEED: "\\n" = escape("n");

/**
 * Matches a VERTICAL TAB character (`U+000B`).
 *
 * @see [Character escape](https://coven.to/mdn/Regular_expressions/Character_escape)
 */
export const VERTICAL_TAB: "\\v" = escape("v");

/**
 * Matches a FORM FEED character (`U+000C`).
 *
 * @see [Character escape](https://coven.to/mdn/Regular_expressions/Character_escape)
 */
export const FORM_FEED: "\\f" = escape("f");

/**
 * Matches a CARRIAGE RETURN character (`U+000D`).
 *
 * @see [Character escape](https://coven.to/mdn/Regular_expressions/Character_escape)
 */
export const CARRIAGE_RETURN: "\\r" = escape("r");
