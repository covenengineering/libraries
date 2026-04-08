![Coven Engineering Utils](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/utils/logo.svg)

[![JSR](https://jsr.io/badges/@coven/utils)](https://coven.to/utils)
[![JSR Score](https://jsr.io/badges/@coven/utils/score)](https://coven.to/utils/score)
[![Coverage Status](https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=coven__utils&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff)](https://app.codecov.io/github/covenengineering/libraries?components[0]=Coven%20Engineering%20Utils)

🛠️ General utilities.

This is a small collection of common utilities used by other libraries from
[Coven Engineering](https://coven.engineering), for some common patterns found
in them.

Like all [Coven Engineering](https://coven.engineering) libraries, it has 100%
test coverage and it's built in top of modern tech compatible with all
JavaScript runtimes.

## Example

```typescript
import { get } from "@coven/utils";

const getMagic = get("✨");

getMagic({ "✨": "🎃" }); // "🎃"
```

## Other links

- [Coverage](https://app.codecov.io/github/covenengineering/libraries).
