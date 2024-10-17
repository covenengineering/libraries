<img alt="Coven Engineering Parsers logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/predicates/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@coven/predicates)](https://jsr.io/@coven/predicates)
[![JSR Score](https://jsr.io/badges/@coven/predicates/score)](https://jsr.io/@coven/predicates/score)

🛡️ Predicate wards.

This library offers a collection of common predicate functions to check for
type, instances, presence of properties and more.

As all [Coven Engineering](https://coven.engineering) libraries, it has 100%
test coverage and it's built in top of modern tech compatible with all
JavaScript runtimes.

## Example

```typescript
import { isBoolean } from "@coven/predicates";

isBoolean(true); // true
isBoolean(false); // true
isBoolean(undefined); // false
```

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
