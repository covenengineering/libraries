import { escape } from "./escape.ts";

/**
 * Matches a NULL character (`U+0000`).
 *
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Character_escape Character escape}
 */
export const NULL: "\\0" = escape("0");

/**
 * Matches a TAB character (`U+0009`).
 *
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Character_escape Character escape}
 */
export const HORIZONTAL_TAB: "\\t" = escape("t");

/**
 * Matches a LINE FEED character (`U+000A`).
 *
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Character_escape Character escape}
 */
export const LINE_FEED: "\\n" = escape("n");

/**
 * Matches a VERTICAL TAB character (`U+000B`).
 *
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Character_escape Character escape}
 */
export const VERTICAL_TAB: "\\v" = escape("v");

/**
 * Matches a FORM FEED character (`U+000C`).
 *
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Character_escape Character escape}
 */
export const FORM_FEED: "\\f" = escape("f");

/**
 * Matches a CARRIAGE RETURN character (`U+000D`).
 *
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Character_escape Character escape}
 */
export const CARRIAGE_RETURN: "\\r" = escape("r");
