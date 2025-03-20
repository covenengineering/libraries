<img alt="Coven Engineering Memo logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/memo/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@coven/memo)](https://jsr.io/@coven/memo)
[![JSR Score](https://jsr.io/badges/@coven/memo/score)](https://jsr.io/@coven/memo/score)

💾 Memoization utilities.

The whole idea is to have an experience similar to what we would get out of the
Record and Tuple proposal from TC39: Readonly memoized structures with
preservation of identity.

This library uses nested `Map`s to save a "tree" with references to all
structures linked to its internal values.

Like all [Coven Engineering](https://coven.engineering) libraries, it has 100%
test coverage and it's built in top of modern tech compatible with all
JavaScript runtimes.

## Example

```typescript
import { memo as ⵌ } from "@coven/memo"; // `ⵌ` here is a Tifinagh letter of the Tuareg alphabet, that looks like `#`

ⵌ(["foo", "bar"]) === ⵌ(["foo", "bar"]); // true
ⵌ({ foo: "bar" }).foo = "baz"; // Error! It's read-only
```

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
