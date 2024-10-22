<img alt="Coven Engineering Cron logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/cron/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@coven/cron)](https://jsr.io/@coven/cron)
[![JSR Score](https://jsr.io/badges/@coven/cron/score)](https://jsr.io/@coven/cron/score)

⏳ Fantastic cron parser and constructor.

This library is the fastest, smallest and safest cron expression parser out
there. This is because it uses a regular expression (built with
[`@coven/expression`](https://jsr.io/@coven/expression)) to parse strings into a
consumable object, and the parse back is done by really quick curried functions
and generators.

It also includes a `nextDate` util that given a `Date` and a valid cron
expression, will return the next matching date. It does validations beforehand
so no "Invalid Date" errors are returned.

Like all [Coven Engineering](https://coven.engineering) libraries, it has 100%
test coverage and it's built in top of modern tech compatible with all
JavaScript runtimes.

Only known limitation is it only accepts valid standard unix cron expressions,
so cron quartz is not supported.

## Parsing

To parse we use the `parse` util:

```typescript
import { parse } from "@coven/cron";

const cron = parse("1-2,3,4 * 2 8,9 1");
```

Which returns:

```typescript
({
	minute: [{ from: 1, to: 2 }, 3, 4],
	hour: "*",
	dayOfMonth: 2,
	month: [8, 9],
	dayOfWeek: 1,
});
```

## Stringifying

To stringify we use the `stringify` util:

```typescript
import { stringify } from "@coven/cron";

const cron = stringify({
	minute: [{ from: 1, to: 2 }, 3, 4],
	hour: "*",
	dayOfMonth: 2,
	month: [8, 9],
	dayOfWeek: 1,
});
```

Which returns:

```typescript
"1-2,3,4 * 2 8,9 1";
```

We can also pass a partial of that "cron object":

```typescript
import { stringify } from "@coven/cron";

stringify({ hour: 13 }); // "* 13 * * *"
```

Which returns:

```typescript
"* 13 * * *";
```

And when an invalid date is specified, `undefined` is returned:

```typescript
import { parse } from "@coven/cron";

parse("* * 31 2 *"); // undefined because 31 of February is invalid
```

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
