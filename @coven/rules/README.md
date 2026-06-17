![Coven Engineering Rules][logo]

[![JSR][jsr-version-badge]][jsr-link] [![JSR Score][jsr-score-badge]][jsr-score]

🚨 Linting rules.

This library has a collection of linting rules used in Coven Engineering
libraries in Deno environments using
[`deno lint`](<(https://docs.deno.com/runtime/reference/cli/lint/)>). In theory
it should be also compatible with ESLint.

## Full list of rules

- `coven/max-lines`: Allow a max of `300` lines per file.
- `coven/no-array-type`: Disallow `Type[]` in favor of `Array<Type>`.
- `coven/no-break`: Disallow `break` statements.
- `coven/no-class`: Disallow classes.
- `coven/no-continue`: Disallow `continue` statements.
- `coven/no-default-export`: Disallow `export default` (use named instead).
- `coven/no-do-while`: Disallow `do..while` loops.
- `coven/no-early-return`: Disallow early `return` in favor of a single exit
  point per function.
- `coven/no-enum`: Disallow `enum`.
- `coven/no-for`: Disallow `for` loops.
- `coven/no-function`: Disallow `function` (use `const` instead).
- `coven/no-null`: Disallow `null` (use `undefined` instead).
- `coven/no-switch`: Disallow `switch`.
- `coven/no-this`: Disallow `this`.
- `coven/no-throw`: Disallow `throw` statements.
- `coven/no-try`: Disallow `try` blocks.
- `coven/no-while`: Disallow `while` loops.

## Example

To use this from deno, update `deno.json`'s `lint` property and add the
following:

```json
{ "plugins": ["jsr:@coven/rules"] }
```

<!-- Links -->

[coven-engineering]: https://coven.engineering
[jsr-link]: https://coven.to/rules
[jsr-score]: https://coven.to/rules/score
[jsr-score-badge]: https://jsr.io/badges/@coven/rules/score
[jsr-version-badge]: https://jsr.io/badges/@coven/rules
[logo]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/rules/logo.svg
