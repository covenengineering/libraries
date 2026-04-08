![Coven Engineering Template](./logo.svg)

[![JSR](https://jsr.io/badges/@coven/template)](https://coven.to/template)
[![JSR Score](https://jsr.io/badges/@coven/template/score)](https://coven.to/template/score)
[![Coverage Status](https://img.shields.io/codecov/c/github/covenengineering/libraries?logo=Codecov&logoColor=%23fff&label=Codecov&labelColor=%23F01F7A&color=%23083344)](https://app.codecov.io/github/covenengineering/libraries?branch=main)

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
