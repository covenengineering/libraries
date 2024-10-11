<img alt="Coven Engineering Cron logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/cron/logo.svg" height="108" />

⏳ A fantastic cron parser and constructor.

## Example

```typescript
import { parse, stringify } from "@coven/cron";

const cron = parse("1-2,3,4 * 2 8,9 1");
/*
	{
		minutes: [{ from: 1, to: 2 }, 3, 4],
		hours: "*",
		dayOfMonth: 2,
		month: [8, 9],
		dayOfWeek: 1
	}
*/

stringify(cron); // "1-2,3,4 * 2 8,9 1"

// Also works with partials:
stringify({ hours: 13 }); // "* 13 * * *"

// Only parses with valid dates:
parse("* * 31 2 *"); // undefined because 2/31 is invalid
```

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
