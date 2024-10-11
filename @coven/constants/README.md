<img alt="Coven Engineering Constants logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/constants/logo.svg" height="108" />

📖 Shared constants scrolls.

## Constants

- `EMPTY_ARRAY`: Empty read-only array. The array is read-only in runtime by
  `Object.freeze`, so trying to do mutations will throw.
- `EMPTY_OBJECT`: Empty read-only `null` prototype object. The object is
  read-only in runtime by `Object.freeze`, so trying to do mutations will throw.
- `EMPTY_STRING`: Empty string. This one exists to have something more readable
  than `""`.

## Example

```typescript
import { EMPTY_ARRAY, EMPTY_OBJECT, EMPTY_STRING } from "@coven/constants";

console.log(EMPTY_ARRAY); // []
console.log(EMPTY_OBJECT); // {}
console.log(EMPTY_STRING); // ""
```

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
