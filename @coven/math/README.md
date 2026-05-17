![Coven Engineering Math](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/math/logo.svg)

[![JSR](https://jsr.io/badges/@coven/math)](https://coven.to/math)
[![JSR Score](https://jsr.io/badges/@coven/math/score)](https://coven.to/math/score)
[![Coverage Status](https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=coven__math&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff)](https://app.codecov.io/github/covenengineering/libraries?components[0]=Coven%20Engineering%20Math)

🧮 Precise math utilities.

Using this library, adding `0.2` + `0.1` will result in `0.3`, and that might
look like nothing to the untrained eye, but it's not
[what JavaScript usually does](https://0.30000000000000004.com/).

The way we achieve this is by using a `bigint` to contain the binary data for a
coefficient and exponent pair (implementation based on
[`DEC64`](https://www.crockford.com/dec64.html)) that we call `Precise`:

```
N                      8 7                   0
[ coefficient (N bits) ] [ exponent (8 bits) ]
```

We then do all math operations using that `Precise` and turn them back to
`number` when we are done.

Like all [Coven Engineering](https://coven.engineering) libraries, it has 100%
test coverage and it's built in top of modern tech compatible with all
JavaScript runtimes.

> [!NOTE]
>
> Obviously, using this or any library like it is way more expensive than doing
> a simple math operation, so use this only when a precise value is required. If
> speed is more important than precision, avoid this or any library like it.

## Examples

```typescript
import { calculate } from "@coven/math";

0.1 + 0.2; // 0.30000000000000004 🫤
+calculate(0.1).plus(0.2); // 0.3 🤯

1e20 + 0.1 - 1e20; // 0 🫤
+calculate(1e20).plus(0.1).minus(1e20); // 0.1 🤯

`${103_993 / 33_102}`; // "3.1415926530119025" 🫤
`${calculate(103_993).over(33_102)}`; // "3.14159265301190260407226149477372968400700863996133164159265301190260407226149477372968400700863996133164159265301190260407226149477372968400700863996133164159265301190260407226149477372968400700863996133164159265301190260407226149477372968400700863996134" 🤯
```

## Other links

- [Coverage](https://app.codecov.io/github/covenengineering/libraries).
