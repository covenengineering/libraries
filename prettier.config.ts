import type { Options } from "prettier";

/**
 * Prettier configuration.
 * @see [Prettier options](https://prettier.io/docs/en/options.html)
 */
// deno-lint-ignore coven/no-default-export
export default {
	/**
	 * Avoid parentheses around a sole arrow function parameter.
	 */
	arrowParens: "always",

	/**
	 * Put the `>` of a multi-line HTML like in a new line.
	 */
	bracketSameLine: false,

	/**
	 * Print spaces between brackets in object literals.
	 */
	bracketSpacing: true,

	/**
	 * Control whether Prettier formats quoted code embedded in the file.
	 */
	embeddedLanguageFormatting: "auto",

	/**
	 * Unix EOL.
	 */
	endOfLine: "lf",

	/**
	 * Use curious ternaries, with the question mark after the condition, instead of on the same line as the consequent.
	 */
	experimentalTernaries: true,

	/**
	 * Put operators at the start of lines
	 */
	experimentalOperatorPosition: "start",

	/**
	 * Strict whitespace in HTML.
	 */
	htmlWhitespaceSensitivity: "strict",

	/**
	 * JSX should use double quote.
	 */
	jsxSingleQuote: false,

	/**
	 * Print width is ideal at 80 characters.
	 */
	printWidth: 80,

	/**
	 * Wrap text to fit the print width.
	 */
	proseWrap: "always",

	/**
	 * Add quotes around properties of object if needed.
	 */
	quoteProps: "as-needed",

	/**
	 * Print semicolons at the ends of statements.
	 */
	semi: true,

	/**
	 * Shows multiple attributes per line in HTML, Vue and JSX.
	 */
	singleAttributePerLine: false,

	/**
	 * Use double quotes.
	 */
	singleQuote: false,

	/**
	 * Tab width at 4 is ideal.
	 */
	tabWidth: 4,

	/**
	 * Add trailing commas to make edition easier and diffing better.
	 */
	trailingComma: "all",

	/**
	 * Obviously use tabs.
	 */
	useTabs: true,

	/**
	 * Indent code in Vue files.
	 */
	vueIndentScriptAndStyle: true,
} as const satisfies Options;
