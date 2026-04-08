![Coven Engineering Predicates](./logo.svg)

[![JSR](https://jsr.io/badges/@coven/predicates)](https://coven.to/predicates)
[![JSR Score](https://jsr.io/badges/@coven/predicates/score)](https://coven.to/predicates/score)
[![Coverage Status](https://img.shields.io/codecov/c/github/covenengineering/libraries?logo=Codecov&logoColor=%23fff&label=Codecov&labelColor=%23F01F7A&color=%23083344)](https://app.codecov.io/github/covenengineering/libraries?components[0]=Coven%20Engineering%20Predicates)

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

- [Coverage](https://app.codecov.io/github/covenengineering/libraries).
