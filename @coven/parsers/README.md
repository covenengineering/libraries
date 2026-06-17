![Coven Engineering Parsers][logo]

[![JSR][jsr-version-badge]][jsr-link] [![JSR Score][jsr-score-badge]][jsr-score]
[![Coverage Status][coverage-badge]][coverage]

💫 Parsing utilities.

Instead of throwing or returning values like `NaN`, the parsers in this library
either return the expected parsed value or `undefined` (making use of the
[Maybe][maybe] type). This enables default value handling and error handling
based on nullish checks (relying on operators like `??` and `?.`).

Like all [Coven Engineering][coven-engineering] libraries, it has 100% test
coverage and it's built in top of modern tech compatible with all JavaScript
runtimes.

## Example

```typescript
import { parseDecimal } from "@coven/parsers";

parseDecimal("101"); // 101
parseDecimal("nope"); // undefined
```

<!-- Links -->

[coven-engineering]: https://coven.engineering
[coverage]:
	https://app.codecov.io/github/covenengineering/libraries%3Fcomponents%5B0%5D%3DCoven%2520Engineering%2520Parsers
[coverage-badge]:
	https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=coven__parsers&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff
[jsr-link]: https://coven.to/parsers
[jsr-score]: https://coven.to/parsers/score
[jsr-score-badge]: https://jsr.io/badges/@coven/parsers/score
[jsr-version-badge]: https://jsr.io/badges/@coven/parsers
[logo]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/parsers/logo.svg
[maybe]: https://coven.to/types/doc/~/Maybe
