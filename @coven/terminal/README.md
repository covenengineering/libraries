![Coven Engineering Terminal][logo]

[![JSR][jsr-version-badge]][jsr-link] [![JSR Score][jsr-score-badge]][jsr-score]
[![Coverage Status][coverage-badge]][coverage]

🌈 Terminal ANSI colors utilities.

`@coven/terminal` uses [ANSI escape codes][ansi-escape-code] to format CLI text
background, color and style. The utils can be used as tag functions for
[template literals][template-literals] like this:

```typescript
import { bold, red } from "@coven/terminal";

console.log(red`Hello ${bold`world`}!`);
// ^ Logs "Hello world!" in red text with the word "world" in bold.
```

## Available Functions

All functions in this library can be used directly, or like template literal tag
functions:

```typescript
import { bold } from "@coven/terminal";

bold("Example") === bold`Example`;
```

### Color Functions

These functions set the foreground and background color of a string. The full
list of available foreground and background functions:

| Color                                                  | Foreground      | Background        |
| ------------------------------------------------------ | --------------- | ----------------- |
| ![Black][color-black] Black                            | `black`         | `bgBlack`         |
| ![White][color-white] White                            | `white`         | `bgWhite`         |
| ![Gray][color-gray] Gray                               | `gray`          | `bgGray`          |
| ![Bright gray][color-bright-gray] Bright Gray          | `brightGray`    | `bgBrightGray`    |
| ![Red][color-red] Red                                  | `red`           | `bgRed`           |
| ![Bright red][color-bright-red] Bright Red             | `brightRed`     | `bgBrightRed`     |
| ![Yellow][color-yellow] Yellow                         | `yellow`        | `bgYellow`        |
| ![Bright yellow][color-bright-yellow] Bright Yellow    | `brightYellow`  | `bgBrightYellow`  |
| ![Green][color-green] Green                            | `green`         | `bgGreen`         |
| ![Bright green][color-bright-green] Bright Green       | `brightGreen`   | `bgBrightGreen`   |
| ![Cyan][color-cyan] Cyan                               | `cyan`          | `bgCyan`          |
| ![Bright cyan][color-bright-cyan] Bright Cyan          | `brightCyan`    | `bgBrightCyan`    |
| ![Blue][color-blue] Blue                               | `blue`          | `bgBlue`          |
| ![Bright blue][color-bright-blue] Bright Blue          | `brightBlue`    | `bgBrightBlue`    |
| ![Magenta][color-magenta] Magenta                      | `magenta`       | `bgMagenta`       |
| ![Bright magenta][color-bright-magenta] Bright Magenta | `brightMagenta` | `bgBrightMagenta` |

### Style Functions

These functions apply various text styles:

| Style                 | Function        |
| --------------------- | --------------- |
| **Bold**              | `bold`          |
| Dimmed                | `dimmed`        |
| Inverse               | `inverse`       |
| _Italic_              | `italic`        |
| ~~Strikethrough~~     | `strikethrough` |
| <ins>Underlined</ins> | `underlined`    |

### Mix Function

The library includes a `mix` function that can be used to mix several utils:

```typescript
import { bgWhite, bold, mix, red } from "@coven/terminal";

const example = mix(bold, red, bgWhite);

example`Coven Engineering`; // The string "Coven Engineering", with bold style, red color and white background
```

Like all [Coven Engineering][coven-engineering] libraries, it has 100% test
coverage and it's built in top of modern tech compatible with all JavaScript
runtimes.

<!-- Links -->

[ansi-escape-code]: https://en.wikipedia.org/wiki/ANSI_escape_code
[color-black]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/black.svg
[color-white]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/white.svg
[color-gray]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/gray.svg
[color-bright-gray]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/brightGray.svg
[color-red]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/red.svg
[color-bright-red]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/brightRed.svg
[color-yellow]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/yellow.svg
[color-bright-yellow]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/brightYellow.svg
[color-green]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/green.svg
[color-bright-green]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/brightGreen.svg
[color-cyan]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/cyan.svg
[color-bright-cyan]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/brightCyan.svg
[color-blue]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/blue.svg
[color-bright-blue]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/brightBlue.svg
[color-magenta]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/magenta.svg
[color-bright-magenta]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/brightMagenta.svg
[coven-engineering]: https://coven.engineering
[coverage]:
	https://app.codecov.io/github/covenengineering/libraries%3Fcomponents%5B0%5D%3DCoven%2520Engineering%2520Terminal
[coverage-badge]:
	https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=coven__terminal&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff
[jsr-link]: https://coven.to/terminal
[jsr-score]: https://coven.to/terminal/score
[jsr-score-badge]: https://jsr.io/badges/@coven/terminal/score
[jsr-version-badge]: https://jsr.io/badges/@coven/terminal
[logo]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/logo.svg
[template-literals]: https://coven.to/mdn/Template_literals
