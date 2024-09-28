/**
 * @module 🖌️ Delightfully simple terminal text styles.
 *
 * `@coven/terminal` uses [ANSI escape codes][ansi-escape-code] to format CLI
 * text background, color and style. The utils can be used as tag functions for
 * [template literals][template-literals] like this:
 *
 * ```typescript
 * import { bold, red } from "cuterminal";
 *
 * onsole.log(red`Hello ${bold`world`}!`);
 * // ^ Logs "Hello world!" in red text with the word "world" in bold.
 * ```
 */

export type { Background } from "./Background.ts";
export { black } from "./black.ts";
export { blackBack } from "./blackBack.ts";
export { blue } from "./blue.ts";
export { blueBack } from "./blueBack.ts";
export { bold } from "./bold.ts";
export { brightBlue } from "./brightBlue.ts";
export { brightBlueBack } from "./brightBlueBack.ts";
export { brightCyan } from "./brightCyan.ts";
export { brightCyanBack } from "./brightCyanBack.ts";
export { brightGray } from "./brightGray.ts";
export { brightGrayBack } from "./brightGrayBack.ts";
export { brightGreen } from "./brightGreen.ts";
export { brightGreenBack } from "./brightGreenBack.ts";
export { brightMagenta } from "./brightMagenta.ts";
export { brightMagentaBack } from "./brightMagentaBack.ts";
export { brightRed } from "./brightRed.ts";
export { brightRedBack } from "./brightRedBack.ts";
export { brightYellow } from "./brightYellow.ts";
export { brightYellowBack } from "./brightYellowBack.ts";
export { CLOSE_BACKGROUND, CLOSE_FOREGROUND, ESCAPE } from "./constants.ts";
export type { CurriedFormat } from "./CurriedFormat.ts";
export { cyan } from "./cyan.ts";
export { cyanBack } from "./cyanBack.ts";
export { dimmed } from "./dimmed.ts";
export type { Foreground } from "./Foreground.ts";
export { format } from "./format.ts";
export type { FormatFunction } from "./FormatFunction.ts";
export type { FormattedString } from "./FormattedString.ts";
export type { Formatter } from "./Formatter.ts";
export { gray } from "./gray.ts";
export { grayBack } from "./grayBack.ts";
export { green } from "./green.ts";
export { greenBack } from "./greenBack.ts";
export { inverse } from "./inverse.ts";
export { italic } from "./italic.ts";
export { magenta } from "./magenta.ts";
export { magentaBack } from "./magentaBack.ts";
export { mix } from "./mix.ts";
export { normalizeString } from "./normalizeString.ts";
export { red } from "./red.ts";
export { redBack } from "./redBack.ts";
export { sgr } from "./sgr.ts";
export { strikethrough } from "./strikethrough.ts";
export { underlined } from "./underlined.ts";
export { white } from "./white.ts";
export { whiteBack } from "./whiteBack.ts";
export { yellow } from "./yellow.ts";
export { yellowBack } from "./yellowBack.ts";
