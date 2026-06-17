![Coven Engineering Predicates][logo]

[![JSR][jsr-version-badge]][jsr-link] [![JSR Score][jsr-score-badge]][jsr-score]
[![Coverage Status][coverage-badge]][coverage]

🕵️‍♀️ Predicate utilities.

This library offers a collection of common predicate functions to check for
type, instances, presence of properties and more.

Like all [Coven Engineering][coven-engineering] libraries, it has 100% test
coverage and it's built in top of modern tech compatible with all JavaScript
runtimes.

## Example

```typescript
import { isBoolean } from "@coven/predicates";

isBoolean(true); // true
isBoolean(false); // true
isBoolean(undefined); // false
```

<!-- Links -->

[coven-engineering]: https://coven.engineering
[coverage]:
	https://app.codecov.io/github/covenengineering/libraries%3Fcomponents%5B0%5D%3DCoven%2520Engineering%2520Predicates
[coverage-badge]:
	https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=coven__predicates&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff
[jsr-link]: https://coven.to/predicates
[jsr-score]: https://coven.to/predicates/score
[jsr-score-badge]: https://jsr.io/badges/@coven/predicates/score
[jsr-version-badge]: https://jsr.io/badges/@coven/predicates
[logo]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/predicates/logo.svg
