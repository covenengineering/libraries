<img alt="Coven Engineering Compare logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/compare/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@coven/compare)](https://jsr.io/@coven/compare)
[![JSR Score](https://jsr.io/badges/@coven/compare/score)](https://jsr.io/@coven/compare/score)

⚖️ Minimalist diffing.

This library takes 2 values in a curried fashion, a `left` or "original" value
first and then a `right` or "new" value, finally returning an iterator with all
the differences between said values. The yielded differences are represented by
3 kinds:

- **Create:** Missing `left` and existing `right`.
- **Update:** Different `left` and `right` values.
- **Delete:** Existing `left` and missing `right`.

## Plain update

If we compare the string 2 different strings, we do it like this:

```typescript
import { compare } from "@coven/compare";

compare("Coven")("Engineering");
```

And we only get a single yielded "update", that looks like this:

```typescript
({
	kind: "UPDATE",
	left: "Coven",
	path: [], // A generator that will yield nothing because is the root value
	right: "Engineering",
});
```

## Object update

If we compare two objects like this:

```typescript
import { compare } from "@coven/compare";

compare({ example: 13 })({ example: 42 });
```

The yielded update will have values yielded from its `path`:

```typescript
({
	kind: "UPDATE",
	left: 13,
	right: 42,
	path: ["example"],
});
```

## Object delete

Let's say we update that same object to an empty one:

```typescript
import { compare } from "@coven/compare";

compare({ example: 13 })({});
```

Yields this:

```typescript
({
	kind: "DELETE",
	left: 13,
	path: ["example"],
});
```

## Object create

Let's say we update that same object from an empty one:

```typescript
import { compare } from "@coven/compare";

compare({})({ example: 42 });
```

Yields this:

```typescript
({
	kind: "CREATE",
	right: 42,
	path: ["example"],
});
```

## Multiple differences

Now let's see what's yielded if we compare two objects with the 3 type of
differences:

```typescript
import { compare } from "@coven/compare";

compare({
	original: "old",
	updated: "old",
})({
	created: "new",
	updated: "new",
});
```

That yields all 3 kind of differences:

```typescript
({ kind: "DELETE", left: "old", path: ["original"] });
({ kind: "UPDATE", left: "old", right: "new", path: ["updated"] });
({ kind: "CREATE", right: "new", path: ["created"] });
```

> [!IMPORTANT]
> In all examples the `path` property is represented as an array, but remember
> `path` is an `IterableIterator` like the output of `compare` is. The included
> `flat` function can be used to flatten all `IterableIterator`s to arrays.

Like all [Coven Engineering](https://coven.engineering) libraries, it has 100%
test coverage and it's built in top of modern tech compatible with all
JavaScript runtimes.

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
