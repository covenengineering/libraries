/**
 * ISO 639 language codes.
 *
 * @example
 * ```typescript
 * const en = "en" as const satisfies LanguageCode;
 * const es = "es" as const satisfies LanguageCode;
 * ```
 * @see {@linkcode https://en.wikipedia.org/wiki/ISO_639 ISO 639}
 */
export type LanguageCode =
	| "qu"
	| "xh"
	| `a${
		| "a"
		| "b"
		| "e"
		| "f"
		| "k"
		| "m"
		| "n"
		| "r"
		| "s"
		| "v"
		| "y"
		| "z"}`
	| `b${"a" | "e" | "g" | "i" | "m" | "n" | "o" | "r" | "s"}`
	| `c${"a" | "e" | "h" | "o" | "r" | "s" | "u" | "v" | "y"}`
	| `d${"a" | "e" | "v" | "z"}`
	| `e${"e" | "l" | "n" | "o" | "s" | "t" | "u"}`
	| `f${"a" | "f" | "i" | "j" | "o" | "r" | "y"}`
	| `g${"a" | "d" | "l" | "n" | "u" | "v"}`
	| `h${"a" | "e" | "i" | "o" | "r" | "t" | "u" | "y" | "z"}`
	| `i${"a" | "d" | "e" | "g" | "i" | "k" | "o" | "s" | "t" | "u"}`
	| `j${"a" | "v"}`
	| `k${
		| "a"
		| "g"
		| "i"
		| "j"
		| "k"
		| "l"
		| "m"
		| "n"
		| "o"
		| "r"
		| "s"
		| "u"
		| "v"
		| "w"
		| "y"}`
	| `l${"a" | "b" | "g" | "i" | "n" | "o" | "t" | "u" | "v"}`
	| `m${"g" | "h" | "i" | "k" | "l" | "n" | "r" | "s" | "t" | "y"}`
	| `n${"a" | "b" | "d" | "e" | "g" | "l" | "n" | "o" | "r" | "v" | "y"}`
	| `o${"c" | "j" | "m" | "r" | "s"}`
	| `p${"a" | "i" | "l" | "s" | "t"}`
	| `r${"m" | "n" | "o" | "u" | "w"}`
	| `s${
		| "a"
		| "c"
		| "d"
		| "e"
		| "g"
		| "i"
		| "k"
		| "l"
		| "m"
		| "n"
		| "o"
		| "q"
		| "r"
		| "s"
		| "t"
		| "u"
		| "v"
		| "w"}`
	| `t${
		| "a"
		| "e"
		| "g"
		| "h"
		| "i"
		| "k"
		| "l"
		| "n"
		| "o"
		| "r"
		| "s"
		| "t"
		| "w"
		| "y"}`
	| `u${"g" | "k" | "r" | "z"}`
	| `v${"e" | "i" | "o"}`
	| `w${"a" | "o"}`
	| `y${"i" | "o"}`
	| `z${"a" | "h" | "u"}`;
