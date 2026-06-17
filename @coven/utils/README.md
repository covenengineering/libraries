![Coven Engineering Utils][logo]

[![JSR][jsr-version-badge]][jsr-link] [![JSR Score][jsr-score-badge]][jsr-score]
[![Coverage Status][coverage-badge]][coverage]

🛠️ General utilities.

This is a small collection of common utilities used by other libraries from
[Coven Engineering][coven-engineering], for some common patterns found in them.

Like all [Coven Engineering][coven-engineering] libraries, it has 100% test
coverage and it's built in top of modern tech compatible with all JavaScript
runtimes.

## Example

```typescript
import { get } from "@coven/utils";

const getMagic = get("✨");

getMagic({ "✨": "🎃" }); // "🎃"
```

<!-- Links -->

[coven-engineering]: https://coven.engineering
[coverage]:
	https://app.codecov.io/github/covenengineering/libraries%3Fcomponents%5B0%5D%3DCoven%2520Engineering%2520Utils
[coverage-badge]:
	https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=coven__utils&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff
[jsr-link]: https://coven.to/utils
[jsr-score]: https://coven.to/utils/score
[jsr-score-badge]: https://jsr.io/badges/@coven/utils/score
[jsr-version-badge]: https://jsr.io/badges/@coven/utils
[logo]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/utils/logo.svg
