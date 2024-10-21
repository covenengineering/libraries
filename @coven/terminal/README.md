<img alt="Coven Engineering Terminal logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@coven/terminal)](https://jsr.io/@coven/terminal)
[![JSR Score](https://jsr.io/badges/@coven/terminal/score)](https://jsr.io/@coven/terminal/score)

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

| Color                                                                                                                                        | Foreground      | Background        |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ----------------- |
| ![Black](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/black.svg) Black                           | `black`         | `bgBlack`         |
| ![White](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/white.svg) White                           | `white`         | `bgWhite`         |
| ![Gray](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/gray.svg) Gray                              | `gray`          | `bgGray`          |
| ![Bright gray](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/brightGray.svg) Bright Gray          | `brightGray`    | `bgBrightGray`    |
| ![Red](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/red.svg) Red                                 | `red`           | `bgRed`           |
| ![Bright red](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/brightRed.svg) Bright Red             | `brightRed`     | `bgBrightRed`     |
| ![Yellow](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/yellow.svg) Yellow                        | `yellow`        | `bgYellow`        |
| ![Bright yellow](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/brightYellow.svg) Bright Yellow    | `brightYellow`  | `bgBrightYellow`  |
| ![Green](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/green.svg) Green                           | `green`         | `bgGreen`         |
| ![Bright green](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/brightGreen.svg) Bright Green       | `brightGreen`   | `bgBrightGreen`   |
| ![Cyan](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/cyan.svg) Cyan                              | `cyan`          | `bgCyan`          |
| ![Bright cyan](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/brightCyan.svg) Bright Cyan          | `brightCyan`    | `bgBrightCyan`    |
| ![Blue](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/blue.svg) Blue                              | `blue`          | `bgBlue`          |
| ![Bright blue](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/brightBlue.svg) Bright Blue          | `brightBlue`    | `bgBrightBlue`    |
| ![Magenta](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/magenta.svg) Magenta                     | `magenta`       | `bgMagenta`       |
| ![Bright magenta](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/terminal/colors/brightMagenta.svg) Bright Magenta | `brightMagenta` | `bgBrightMagenta` |

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

As all [Coven Engineering](https://coven.engineering) libraries, it has 100%
test coverage and it's built in top of modern tech compatible with all
JavaScript runtimes.

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).

<!-- Reference -->

[ansi-escape-code]: https://en.wikipedia.org/wiki/ANSI_escape_code
[template-literals]: https:/mdn.io/Template_literals
