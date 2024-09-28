import type { LanguageCode } from "./LanguageCode.ts";
import type { MaybeEmptyString } from "./MaybeEmptyString.ts";

/**
 * BCP 47 Language Tag. When using i18n tools, this is a stricter union type
 * than `string` to handle the locale identifiers.
 *
 * @example
 * ```typescript
 * const locale = "en-US" as const satisfies LanguageTag;
 * ```
 * @see {@link LanguageCode}
 * @see [ISO 639](https://en.wikipedia.org/wiki/IETF_language_tag)
 * @see [IETF BCP 47](https://en.wikipedia.org/wiki/ISO_639)
 */
export type LanguageTag = `${LanguageCode}${MaybeEmptyString<`-${string}`>}`;
