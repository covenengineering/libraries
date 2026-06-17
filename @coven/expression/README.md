![Coven Engineering Expression][logo]

[![JSR][jsr-version-badge]][jsr-link] [![JSR Score][jsr-score-badge]][jsr-score]
[![Coverage Status][coverage-badge]][coverage]

🧙‍♀️ Magical regular expressions composer.

It is really easy to mess big regular expressions by forgetting some character.
So, instead of using plain strings, `@coven/expression` provides a set of
functions and constants strongly typed, so the type is already a hardcoded
string that reflects the regular expression being built, while giving an API
that's easier to read and maintain.

Like all [Coven Engineering][coven-engineering] libraries, it has 100% test
coverage and it's built in top of modern tech compatible with all JavaScript
runtimes.

## Example

```typescript
import { buildUnicode, disjunction, group } from "@coven/expression";

buildUnicode(group(disjunction("this", "that"))); // /(?:this|that)/u
```

<!-- Links -->

[coven-engineering]: https://coven.engineering
[coverage]:
	https://app.codecov.io/github/covenengineering/libraries%3Fcomponents%5B0%5D%3DCoven%2520Engineering%2520Expression
[coverage-badge]:
	https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=coven__expression&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff
[jsr-link]: https://coven.to/expression
[jsr-score]: https://coven.to/expression/score
[jsr-score-badge]: https://jsr.io/badges/@coven/expression/score
[jsr-version-badge]: https://jsr.io/badges/@coven/expression
[logo]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/expression/logo.svg
