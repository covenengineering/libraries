<img alt="Coven Engineering Constants logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/constants/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@coven/constants)](https://coven.to/constants)
[![JSR Score](https://jsr.io/badges/@coven/constants/score)](https://coven.to/constants/score)

🧱 Common constants.

Is pretty common to start folding/reducing with an empty object or array. This
library simply contains those common values as immutable structures to avoid
accidental mutations.

Like all [Coven Engineering](https://coven.engineering) libraries, it has 100%
test coverage and it's built in top of modern tech compatible with all
JavaScript runtimes. The tests for this library only make sure trying to do
mutations throws.

## Constants

- `EMPTY_ARRAY`: Empty read-only array.
- `EMPTY_OBJECT`: Empty read-only `null` prototype object.

## Example

```typescript
import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";

console.log(EMPTY_ARRAY); // []
console.log(EMPTY_OBJECT); // {}
```

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
