![Coven Engineering Constants][logo]

[![JSR][jsr-version-badge]][jsr-link] [![JSR Score][jsr-score-badge]][jsr-score]
[![Coverage Status][coverage-badge]][coverage]

🧱 Common constants.

This library provides constants commonly used for initial and default values as
immutable structures to avoid accidental mutations.

Like all [Coven Engineering][coven-engineering] libraries, it has 100% test
coverage and it's built in top of modern tech compatible with all JavaScript
runtimes. The tests for this library only make sure trying to do mutations
throws.

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

<!-- Links -->

[coven-engineering]: https://coven.engineering
[coverage]:
	https://app.codecov.io/github/covenengineering/libraries%3Fcomponents%5B0%5D%3DCoven%2520Engineering%2520Constants
[coverage-badge]:
	https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=coven__constants&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff
[jsr-link]: https://coven.to/constants
[jsr-score]: https://coven.to/constants/score
[jsr-score-badge]: https://jsr.io/badges/@coven/constants/score
[jsr-version-badge]: https://jsr.io/badges/@coven/constants
[logo]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/constants/logo.svg
