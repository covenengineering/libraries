![Coven Engineering Rules](./logo.svg)

[![JSR](https://jsr.io/badges/@coven/rules)](https://coven.to/rules)
[![JSR Score](https://jsr.io/badges/@coven/rules/score)](https://coven.to/rules/score)

🚨 Linting rules.

This library has a collection of linting rules used in Coven Engineering
libraries in Deno environments. In theory it should be also compatible with
ESLint.

## Full list of rules

- `coven/max-lines`: Allow a max of `300` lines per file.
- `coven/no-break`: Disallow `break` statements.
- `coven/no-class`: Disallow classes.
- `coven/no-continue`: Disallow `continue` statements.
- `coven/no-default-export`: Disallow `export default` (use named instead).
- `coven/no-do-while`: Disallow `do..while` loops.
- `coven/no-enum`: Disallow `enum`.
- `coven/no-for-in`: Disallow `for..in` loops.
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
{
	"plugins": ["jsr:@coven/rules"]
}
```

## Other links

- [Coverage](https://app.codecov.io/github/covenengineering/libraries).
- [Deno Lint](https://docs.deno.com/runtime/reference/cli/lint/).
