<img alt="Coven Engineering Compare logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/compare/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@coven/compare)](https://jsr.io/@coven/compare)
[![JSR Score](https://jsr.io/badges/@coven/compare/score)](https://jsr.io/@coven/compare/score)

🪞 Minimalistic deep comparison.

This library takes 2 values (a `left` and a `right`) and returns an iterator
with all the differences between said values. The differences are represented by
3 kinds:

- **Create:** Missing `left` and existing `right`.
- **Update:** Different `left` and `right` values.
- **Delete:** Existing `left` and missing `right`.

## Example

```typescript
import { compare } from "@coven/compare";

compare("Coven")("Engineering"); // Yields { kind: "UPDATE", left: "Coven", right: "Engineering" }
compare({ example: 13 })({ example: 42 }); // Yields { kind: "UPDATE", left: "13", right: "42", path: ["example"] }
compare({ example: 13 })({}); // Yields { kind: "DELETE", left: "13", path: ["example"] }
```

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
