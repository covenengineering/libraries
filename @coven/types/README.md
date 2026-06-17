![Coven Engineering Types][logo]

[![JSR][jsr-version-badge]][jsr-link] [![JSR Score][jsr-score-badge]][jsr-score]

🏷️ Collection of TypeScript types.

This types are mainly meant as a way of centralizing types used by [Coven
Engineering][coven-engineering] libraries, but as the rest of the libraries,
it's open source so anyone interested can use these.

> [!CAUTION]
>
> The target of this library is to have types for Coven Engineering libraries,
> so the types added or updated are meant to adjust to the needs of said
> libraries, so breaking changes should be expected every now and then.

## Example

```typescript
import type { Unary } from "@coven/types";

const next: Unary<[input: number], number> = (input) => input + 1;
```

<!-- Links -->

[coven-engineering]: https://coven.engineering
[jsr-link]: https://coven.to/types
[jsr-score]: https://coven.to/types/score
[jsr-score-badge]: https://jsr.io/badges/@coven/types/score
[jsr-version-badge]: https://jsr.io/badges/@coven/types
[logo]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/types/logo.svg
