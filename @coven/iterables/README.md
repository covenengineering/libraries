<img alt="Coven Engineering Iterables logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/iterables/logo.svg" height="108" />

🌪️ Iteration rituals.

## Example

```typescript
import { map } from "@coven/iterables";

const double = (multiplier: number) => multiplier * 2;
const doubles = map(double);

doubles([13, 42]); // Yields [26, 84]
```
