![Coven Engineering Template][logo]

[![JSR][jsr-version-badge]][jsr-link] [![JSR Score][jsr-score-badge]][jsr-score]
[![Coverage Status][coverage-badge]][coverage]

🧩 Tagged template literals simplified.

This library provides a setup `template` function to create tagged template
literal functions that will format strings like magic.

Like all [Coven Engineering][coven-engineering] libraries, it has 100% test
coverage and it's built in top of modern tech compatible with all JavaScript
runtimes.

## Example

```typescript
import { template } from "@coven/template";

// We create a template
const moneyTemplate = template({
	boolean: (payed) => (payed ? "it's payed" : "it's due"),
	number: (cost) =>
		cost.toLocaleString("en-US", { style: "currency", currency: "USD" }),
});

// And then we use it anywhere
let payed = false;
console.log(moneyTemplate`The amount is ${13_000} and ${payed}.`);
// Logs: "The amount is $13,000.00 and it's due."
```

<!-- Links -->

[coven-engineering]: https://coven.engineering
[coverage]:
	https://app.codecov.io/github/covenengineering/libraries%3Fcomponents%5B0%5D%3DCoven%2520Engineering%2520Template
[coverage-badge]:
	https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=coven__template&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff
[jsr-link]: https://coven.to/template
[jsr-score]: https://coven.to/template/score
[jsr-score-badge]: https://jsr.io/badges/@coven/template/score
[jsr-version-badge]: https://jsr.io/badges/@coven/template
[logo]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/template/logo.svg
