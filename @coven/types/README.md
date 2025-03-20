<img alt="Coven Engineering Types logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/types/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@coven/types)](https://coven.to/types)
[![JSR Score](https://jsr.io/badges/@coven/types/score)](https://coven.to/types/score)

🏷️ Collection of TypeScript types.

This types are mainly meant as a way of centralizing types used by
[Coven Engineering](https://coven.engineering/) libraries, but as the rest of
the libraries, it's open source so anyone interested can use these.

> [!CAUTION] The target of this library is to have types for Coven Engineering
> libraries, so the types added or updated are meant to adjust to the needs of
> said libraries, so breaking changes should be expected every now and then.

## Example

```typescript
import type { Unary } from "@coven/types";

const next: Unary<[input: number], number> = input => input + 1;
```

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
