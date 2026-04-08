![Coven Engineering Memo](./logo.svg)

[![JSR](https://jsr.io/badges/@coven/memo)](https://coven.to/memo)
[![JSR Score](https://jsr.io/badges/@coven/memo/score)](https://coven.to/memo/score)
[![Coverage Status](https://img.shields.io/codecov/c/github/covenengineering/libraries?logo=Codecov&logoColor=%23fff&label=Codecov&labelColor=%23F01F7A&color=%23083344)](https://app.codecov.io/github/covenengineering/libraries?components[0]=Coven%20Engineering%20Memo)

💾 Memoization utilities.

The whole idea is to have an experience similar to we could have gotten out of
the now withdrawn Record and Tuple proposal: Readonly memoized structures with
preservation of identity.

This library uses nested `Map`s to save a "tree" with references to all
structures linked to its internal values. The nesting level is the index and the
SIGIL symbol flags a value.

Like all [Coven Engineering](https://coven.engineering) libraries, it has 100%
test coverage and it's built in top of modern tech compatible with all
JavaScript runtimes.

## Example

### Memoizing values

```typescript
import { memo } from "@coven/memo";

memo(["✨", "🔮", "💀"]) === memo(["✨", "🔮", "💀"]); // true
memo(["✨", "🔮", "💀"]); // Frozen Array: ["✨", "🔮", "💀"]
```

Internally this is saved in a structure like this:

```plain
Map([
	["✨", Map([
		["🔮", Map([
			"💀", Map([
				[Symbol(⛧), ["✨", "🔮", "💀"]]
			])
		])]
	])]
])
```

### Memoizing function output

```typescript
import { memoFunction } from "@coven/memo";

const expensiveOperation = (value: number) => value * 2;
const memoizedOperation = memoFunction(expensiveOperation);

memoizedOperation(2); // 4
memoizedOperation(2); // 4 (cached)
```

Internally this is saved in a structure like this:

```plain
Map([
	[[2], 4]
])
```

`[2]` being a memoized tuple of the parameters of the function.

In the example we use it with a simple function that doesn't require
memoization, but ideally `memoFunction` should be used with expensive functions
or functions that return objects which identities we want to keep.

## Other links

- [Coverage](https://app.codecov.io/github/covenengineering/libraries).
