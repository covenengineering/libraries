![Coven Engineering Expression](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/expression/logo.svg)

[![JSR](https://jsr.io/badges/@coven/expression)](https://coven.to/expression)
[![JSR Score](https://jsr.io/badges/@coven/expression/score)](https://coven.to/expression/score)
[![Coverage Status](https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=coven__expression&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff)](https://app.codecov.io/github/covenengineering/libraries?components[0]=Coven%20Engineering%20Expression)

🧙‍♀️ Magical regular expressions composer.

It is really easy to mess big regular expressions by forgetting some character.
So, instead of using plain strings, `@coven/expression` provides a set of
functions and constants strongly typed, so the type is already a hardcoded
string that reflects the regular expression being built, while giving an API
that's easier to read and maintain.

Like all [Coven Engineering](https://coven.engineering) libraries, it has 100%
test coverage and it's built in top of modern tech compatible with all
JavaScript runtimes.

## Example

```typescript
import { buildUnicode, disjunction, group } from "@coven/expression";

buildUnicode(group(disjunction("this", "that"))); // /(?:this|that)/u
```

## Other links

- [Coverage](https://app.codecov.io/github/covenengineering/libraries).
