import type { LanguageCode } from "./LanguageCode.ts";

/**
 * BCP 47 Language Tag. When using i18n tools, this is a stricter union type
 * than `string` to handle the locale identifiers.
 *
 * @example
 * ```typescript
 * const locale = "en-US" as const satisfies LanguageTag;
 * ```
 * @see {@linkcode LanguageCode}
 * @see {@linkcode https://en.wikipedia.org/wiki/IETF_language_tag ISO 639}
 * @see {@linkcode https://en.wikipedia.org/wiki/ISO_639 IETF BCP 47}
 */
export type LanguageTag = LanguageCode | `${LanguageCode}-${string}`;
