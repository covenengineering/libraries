import { escape } from "./escape.ts";

/**
 * Matches the beginning of the string, or the beginning of a line if the
 * multiline flag (m) is enabled. This matches a position, not a character.
 */
export const START = "^";

/**
 * Matches the end of the string, or the end of a line if the multiline flag (m)
 * is enabled. This matches a position, not a character.
 */
export const END = "$";

/**
 * Matches a word boundary position between a word character and non-word
 * character or position (start / end of string). See the word character class
 * (w) for more info.
 */
export const WORD_BOUNDARY: "\\b" = escape("b");

/**
 * Matches any position that is not a word boundary. This matches a position,
 * not a character.
 */
export const NOT_WORD_BOUNDARY: "\\B" = escape("B");

/**
 * Matches any character except line breaks. Equivalent to [^\n\r].
 */
export const ALL = ".";

/**
 * Matches any word character (alphanumeric & underscore). Only matches
 * low-ascii characters (no accented or non-roman characters). Equivalent to
 * [A-Za-z0-9_]
 */
export const WORD: "\\w" = escape("w");

/**
 * Matches any character that is not a word character (alphanumeric &
 * underscore). Equivalent to [^A-Za-z0-9_]
 */
export const NOT_WORD: "\\W" = escape("W");

/**
 * Matches any digit character (0-9). Equivalent to [0-9].
 */
export const DIGIT: "\\d" = escape("d");

/**
 * Matches any character that is not a digit character (0-9). Equivalent to
 * [^0-9].
 */
export const NOT_DIGIT: "\\D" = escape("D");

/**
 * Matches any whitespace character (spaces, tabs, line breaks).
 */
export const WHITESPACE: "\\s" = escape("s");

/**
 * Matches any character that is not a whitespace character (spaces, tabs, line
 * breaks).
 */
export const NOT_WHITESPACE: "\\S" = escape("S");

/**
 * Matches a TAB character (char code 9).
 */
export const TAB: "\\t" = escape("t");

/**
 * Matches a LINE FEED character (char code 10).
 */
export const LINE_FEED: "\\n" = escape("n");

/**
 * Matches a VERTICAL TAB character (char code 11).
 */
export const VERTICAL_TAB: "\\v" = escape("v");

/**
 * Matches a FORM FEED character (char code 12).
 */
export const FORM_FEED: "\\f" = escape("f");

/**
 * Matches a CARRIAGE RETURN character (char code 13).
 */
export const CARRIAGE_RETURN: "\\r" = escape("r");

/**
 * Matches a NULL character (char code 0).
 */
export const NULL: "\\0" = escape("0");
