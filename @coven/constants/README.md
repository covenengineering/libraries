![Coven Engineering Constants](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/constants/logo.svg)

[![JSR](https://jsr.io/badges/@coven/constants)](https://coven.to/constants)
[![JSR Score](https://jsr.io/badges/@coven/constants/score)](https://coven.to/constants/score)
[![Coverage Status](https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=coven__constants&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff)](https://app.codecov.io/github/covenengineering/libraries?components[0]=Coven%20Engineering%20Constants)

🧱 Common constants.

This library provides constants commonly used for initial and default values as
immutable structures to avoid accidental mutations.

Like all [Coven Engineering](https://coven.engineering) libraries, it has 100%
test coverage and it's built in top of modern tech compatible with all
JavaScript runtimes. The tests for this library only make sure trying to do
mutations throws.

## Exported constants

- `EMPTY_ARRAY`: Empty read-only array.
- `EMPTY_OBJECT`: Empty read-only `null` prototype object.
- `SIGIL`: Internal value to be used as bottom value (like `null` and
  `undefined`) when native bottom values have to be used for something else.

## Example

```typescript
import { EMPTY_ARRAY, EMPTY_OBJECT, SIGIL } from "@coven/constants";

console.log(EMPTY_ARRAY); // []
console.log(EMPTY_OBJECT); // {}
console.log(SIGIL); // Symbol("⛧")
```

## Other links

- [Coverage](https://app.codecov.io/github/covenengineering/libraries).
