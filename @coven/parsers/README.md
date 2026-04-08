![Coven Engineering Parsers](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/parsers/logo.svg)

[![JSR](https://jsr.io/badges/@coven/parsers)](https://coven.to/parsers)
[![JSR Score](https://jsr.io/badges/@coven/parsers/score)](https://coven.to/parsers/score)
[![Coverage Status](https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=coven__parsers&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff)](https://app.codecov.io/github/covenengineering/libraries?components[0]=Coven%20Engineering%20Parsers)

💫 Parsing utilities.

Instead of throwing or returning values like `NaN`, the parsers in this library
either return the expected parsed value or `undefined` (making use of the
[Maybe](https://coven.to/types/doc/~/Maybe) type). This enables default value
handling and error handling based on nullish checks (relying on operators like
`??` and `?.`).

Like all [Coven Engineering](https://coven.engineering) libraries, it has 100%
test coverage and it's built in top of modern tech compatible with all
JavaScript runtimes.

## Example

```typescript
import { parseDecimal } from "@coven/parsers";

parseDecimal("101"); // 101
parseDecimal("nope"); // undefined
```

## Other links

- [Coverage](https://app.codecov.io/github/covenengineering/libraries).
