![Coven Engineering Math](./logo.svg)

[![JSR](https://jsr.io/badges/@coven/math)](https://coven.to/math)
[![JSR Score](https://jsr.io/badges/@coven/math/score)](https://coven.to/math/score)
[![Coverage Status](https://img.shields.io/codecov/c/github/covenengineering/libraries?logo=Codecov&logoColor=%23fff&label=Codecov&labelColor=%23F01F7A&color=%23083344)](https://app.codecov.io/github/covenengineering/libraries?branch=main)

🧮 Precise math utilities.

Using this library, adding `0.2` + `0.1` will result in `0.3`, and that might
look like nothing to the untrained eye, but it's not
[what JavaScript usually does](https://0.30000000000000004.com/).

The way we achieve this is by using a tuple we called `Precise` which contains a
representation of the base and exponent of a number using `bigint`. We then do
all math operations over base and exponent in those tuples and turn them back to
`number` when we are done.

Like all [Coven Engineering](https://coven.engineering) libraries, it has 100%
test coverage and it's built in top of modern tech compatible with all
JavaScript runtimes.

> [!NOTE]
>
> Obviously, using this or any library like it is way more expensive than doing
> a simple math operation, so use this only when a precise value is required. If
> speed is more important than precision, avoid this or any library like it.

## Example

```typescript
import { calculate } from "@coven/math";

calculate(0.1).plus(0.2).total; // 0.3 🤯
```

## Other links

- [Coverage](https://app.codecov.io/github/covenengineering/libraries).
