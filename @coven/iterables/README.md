<img alt="Coven Engineering Iterables logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/iterables/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@coven/iterables)](https://jsr.io/@coven/iterables)
[![JSR Score](https://jsr.io/badges/@coven/iterables/score)](https://jsr.io/@coven/iterables)

🌪️ Iteration rituals.

## Example

```typescript
import { map } from "@coven/iterables";

const double = (multiplier: number) => multiplier * 2;
const doubles = map(double);

doubles([13, 42]); // Yields [26, 84]
```

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
