<img alt="Coven Engineering Predicates logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/predicates/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@coven/predicates)](https://coven.to/predicates)
[![JSR Score](https://jsr.io/badges/@coven/predicates/score)](https://coven.to/predicates/score)

🕵️‍♀️ Predicate utilities.

This library offers a collection of common predicate functions to check for
type, instances, presence of properties and more.

Like all [Coven Engineering](https://coven.engineering) libraries, it has 100%
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
