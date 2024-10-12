<img alt="Coven Engineering Iterables logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/iterables/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@coven/iterables)](https://jsr.io/@coven/iterables)
[![JSR Score](https://jsr.io/badges/@coven/iterables/score)](https://jsr.io/@coven/iterables/score)

🌪️ Iteration rituals.

One of the places curried functions shine the most is with iterables. More often
than not, mapping, filtering and so on is applied to multiple different
iterables, which results in duplicated code.

`@coven/iterables` provides 2 modules, the default for synchronous iterables and
then `@coven/iterables/async` for asynchronous iterables. All functions are
curried to reduce code duplication, and they work with all iterables (generator
functions, arrays, strings, Sets, Maps, etc.).

One of the key differences between this library and other similar collection
handling libraries like say lodash, is the heavy use of iterators. At first
glance they might looks slower because of their complexity, but in reality they
produce a faster "perceived performance". This is because of the way iterables
iteration work compared to plain arrays.

While array operation has to go over all items before going to the next
function, iterables run all functions in each item and yields them:

```typescript
const double = (value) => value * 2;
const next = (value) => value + 1;

// With array methods

[1, 2, 3, 4].map(double).map(next).forEach(console.log);
// 1. [2, 4, 6, 8] in memory the user is still waiting for output
// 2. [3, 5, 7, 9] in memory the user is still waiting for output
// 3. Logs 3
// 4. Logs 5
// 5. Logs 7
// 6. Logs 9

// With iterables functions

// [1, 2, 3, 4] |> map(double) |> map(next) |> forEach(console.log);
forEach(console.log)(map(next)(map(double)([1, 2, 3, 4])));
// 1. 2 → 3 → Logs 3
// 2. 4 → 5 → Logs 5
// 3. 6 → 7 → Logs 7
// 4. 8 → 9 → Logs 9
```

As all [Coven Engineering](https://coven.engineering) libraries, it has 100%
test coverage and it's built in top of modern tech compatible with all
JavaScript runtimes.

## Example

```typescript
import { map } from "@coven/iterables";

const double = (multiplier: number) => multiplier * 2;
const doubles = map(double);

doubles([13, 42]); // Yields [26, 84]
```

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
