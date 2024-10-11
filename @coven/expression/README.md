<img alt="Coven Engineering Expression logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/expression/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@coven/expression)](https://jsr.io/@coven/expression)
[![JSR Score](https://jsr.io/badges/@coven/expression/score)](https://jsr.io/@coven/expression/score)

🧙🏻‍♀️ Magically build regular expressions.

## Example

```typescript
import { build, group, or } from "@coven/expression";

build("gu")(group(or("this", "that"))); // /(?:this|that)/gu
```

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
