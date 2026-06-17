![Coven Engineering Math][logo]

[![JSR][jsr-version-badge]][jsr-link] [![JSR Score][jsr-score-badge]][jsr-score]
[![Coverage Status][coverage-badge]][coverage]

🧮 Precise math utilities.

Using this library, adding `0.2` + `0.1` will result in `0.3`, and that might
look like nothing to the untrained eye, but it's not [what JavaScript usually
does][floating-point-math].

The way we achieve this is by using a `bigint` to contain the binary data for a
coefficient and exponent pair (implementation based on [`DEC64`][dec64]) that we
call `Precise`:

```
N                      8 7                   0
[ coefficient (N bits) ] [ exponent (8 bits) ]
```

We then do all math operations using that `Precise` and turn them back to
`number` when we are done.

Like all [Coven Engineering][coven-engineering] libraries, it has 100% test
coverage and it's built in top of modern tech compatible with all JavaScript
runtimes.

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

Each `calculate` operation returns a new frozen object. This methods don't use
`this` so they can be safely extracted:

```typescript
import { calculate } from "@coven/math";

const { plus } = calculate(0.1);
+plus(0.2); // 0.3
+plus(0); // 0.1
+plus(1e20).minus(1e20); // 0.1
```

<!-- Links -->

[coven-engineering]: https://coven.engineering
[coverage]:
	https://app.codecov.io/github/covenengineering/libraries%3Fcomponents%5B0%5D%3DCoven%2520Engineering%2520Math
[coverage-badge]:
	https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=coven__math&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff
[dec64]: https://www.crockford.com/dec64.html
[floating-point-math]: https://0.30000000000000004.com/
[jsr-link]: https://coven.to/math
[jsr-score]: https://coven.to/math/score
[jsr-score-badge]: https://jsr.io/badges/@coven/math/score
[jsr-version-badge]: https://jsr.io/badges/@coven/math
[logo]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/math/logo.svg
