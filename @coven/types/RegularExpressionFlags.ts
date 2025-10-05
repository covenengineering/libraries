/**
 * Type union stricter than `string` type for RegExp flags. The unicode flag is
 * mandatory to ensure unicode characters are always supported.
 *
 * @example
 * ```typescript
 * const flags1: RegularExpressionFlags = "u";
 * const flags2: RegularExpressionFlags = "gu";
 * const flags3: RegularExpressionFlags = "iu";
 * const flags4: RegularExpressionFlags = "giu";
 * ```
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Cheatsheet Regular Expressions}
 */
export type RegularExpressionFlags =
	| "u"
	| "su"
	| "mu"
	| "msu"
	| "iu"
	| "isu"
	| "imu"
	| "imsu"
	| "gu"
	| "gsu"
	| "gmu"
	| "gmsu"
	| "giu"
	| "gisu"
	| "gimu"
	| "gimsu";
