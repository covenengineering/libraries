<img alt="Coven Engineering Rules logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/rules/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@coven/rules)](https://coven.to/rules)
[![JSR Score](https://jsr.io/badges/@coven/rules/score)](https://coven.to/rules/score)

🚨 Linting rules.

This library has a collection of linting rules used in Coven Engineering
libraries in Deno environments. In theory it should be also compatible with
ESLint.

## Full list of rules

- `coven/max-lines`: Allow a max of `300` lines per file.
- `coven/no-break`: Dissallow `break` statements.
- `coven/no-class`: Dissallow classes.
- `coven/no-continue`: Dissallow `continue` statements.
- `coven/no-default-export`: Dissallow `export default` (use named instead).
- `coven/no-do-while`: Dissallow `do..while` loops.
- `coven/no-enum`: Dissallow `enum`.
- `coven/no-for-in`: Dissallow `for..in` loops.
- `coven/no-function`: Dissallow `function` (use `const` instead).
- `coven/no-null`: Dissallow `null` (use `undefined` instead).
- `coven/no-switch`: Dissallow `switch`.
- `coven/no-this`: Dissallow `this`.
- `coven/no-throw`: Dissallow `throw` statements.
- `coven/no-try`: Dissallow `try` blocks.
- `coven/no-while`: Dissallow `while` loops.

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
