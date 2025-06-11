import type { Options } from "prettier";
import organizeImports from "prettier-plugin-organize-imports";

/**
 * Prettier configuration (will drop once `deno fmt` reachs parity).
 * @see [Prettier options](https://prettier.io/docs/en/options.html)
 */
export default {
	// Available in deno fmt
	endOfLine: "lf", // "newLineKind": "lf",
	printWidth: 80, // "lineWidth": 80,
	proseWrap: "always", // "proseWrap": "always",
	quoteProps: "as-needed", // "quoteProps": "asNeeded",
	semi: true, // "semiColons": true,
	singleQuote: false, // "singleQuote": false,
	tabWidth: 4, // "indentWidth": 4,
	trailingComma: "all", // "trailingCommas": "onlyMultiLine",
	useTabs: true, // "useTabs": true

	// Missing in deno fmt
	arrowParens: "avoid",
	bracketSameLine: false,
	bracketSpacing: true,
	embeddedLanguageFormatting: "auto",
	experimentalTernaries: true,
	htmlWhitespaceSensitivity: "css",
	jsxSingleQuote: false,
	plugins: [organizeImports],
	singleAttributePerLine: true,
	vueIndentScriptAndStyle: true,
} as const satisfies Options;
