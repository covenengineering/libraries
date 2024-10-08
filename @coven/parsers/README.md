<img alt="Coven Engineering Parsers logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/parsers/logo.svg" height="108" />

💫 Parsing charms.

Instead of throwing or returning values like `NaN`, the parsers in this library
either return the expected parsed value or `undefined` (making use of the
[Maybe](https://jsr.io/@coven/types/doc/~/Maybe) type).

## Example

```typescript
import { parseDecimal } from "@coven/parsers";

parseDecimal("101"); // 101
parseDecimal("nope"); // undefined
```
