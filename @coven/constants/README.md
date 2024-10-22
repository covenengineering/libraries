<img alt="Coven Engineering Constants logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/constants/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@coven/constants)](https://jsr.io/@coven/constants)
[![JSR Score](https://jsr.io/badges/@coven/constants/score)](https://jsr.io/@coven/constants/score)

🧱 Common constants.

Is pretty common to start folding actions with an empty object, array or string.
This library simply contains those common values as immutable structures to
avoid mutations on them and make DX a little bit better (is way easier to spot
an `EMPTY_OBJECT` that it is to spot a `{}`).

Like all [Coven Engineering](https://coven.engineering) libraries, it has 100%
test coverage and it's built in top of modern tech compatible with all
JavaScript runtimes. The tests for this library only make sure trying to do
mutations throws.

## Constants

- `EMPTY_ARRAY`: Empty read-only array.
- `EMPTY_OBJECT`: Empty read-only `null` prototype object.
- `EMPTY_STRING`: Empty string.

## Example

```typescript
import { EMPTY_ARRAY, EMPTY_OBJECT, EMPTY_STRING } from "@coven/constants";

console.log(EMPTY_ARRAY); // []
console.log(EMPTY_OBJECT); // {}
console.log(EMPTY_STRING); // ""
```

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
