<img alt="Coven Engineering Parsers logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/parsers/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@coven/parsers)](https://coven.to/parsers)
[![JSR Score](https://jsr.io/badges/@coven/parsers/score)](https://coven.to/parsers/score)

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
