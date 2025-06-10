/**
 * Matches any character except line terminators. If the
 * [`s`](https://coven.to/mdn/RegExp/dotAll) flag is set, it also matches line
 * terminators.
 *
 * The exact character set matched by this depends on whether the regex is
 * [Unicode-aware](https://coven.to/mdn/RegExp/unicode). If it is Unicode-aware,
 * this matches any Unicode code point; otherwise, it matches any UTF-16 code
 * unit.
 *
 * @see [Wildcard](https://coven.to/mdn/Regular_expressions/Wildcard)
 */
export const WILDCARD = ".";
