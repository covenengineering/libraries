![Coven Engineering Template](./logo.svg)

[![JSR](https://jsr.io/badges/@coven/template)](https://coven.to/template)
[![JSR Score](https://jsr.io/badges/@coven/template/score)](https://coven.to/template/score)
[![Coverage Status](https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=coven__template&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff)](https://app.codecov.io/github/covenengineering/libraries?components[0]=Coven%20Engineering%20Template)

🧩 Tagged template literals simplified.

This library provides a setup `template` function to create tagged template
literal functions that will format strings like magic.

## Example

```typescript
import { template } from "@coven/template";

// We create a template
const moneyTemplate = template({
	boolean: (payed) => (payed ? "it's payed" : "it's due"),
	number: (cost) =>
		cost.toLocaleString("en-US", {
			style: "currency",
			currency: "USD",
		}),
});

// And then we use it anywhere
let payed = false;
console.log(moneyTemplate`The amount is ${13_000} and ${payed}.`);
// Logs: "The amount is $13,000.00 and it's due."
```

## Other links

- [Coverage](https://app.codecov.io/github/covenengineering/libraries).
