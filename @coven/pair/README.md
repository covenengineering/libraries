<img alt="Coven Engineering Pair logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/pair/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@coven/pair)](https://jsr.io/@coven/pair)
[![JSR Score](https://jsr.io/badges/@coven/pair/score)](https://jsr.io/@coven/pair/score)

🖇️ [Paired hook pattern](https://lou.cx/articles/the-paired-hook-pattern)
helper. It only makes pairing simpler and provides a little bit better DX
(integration with React Devtools by setting a `displayName` automatically),
while also having 100% coverage like with all
[Coven Engineering](https://coven.engineering) libraries.

Currently supported frameworks:

- ⚛ Preact: `@coven/pair/preact`.
- ⚛ React: `@coven/pair/react`.

## Examples

### Preact

```tsx
/** @jsxImportSource preact */
import { pair } from "@coven/pair/preact";
import { useState } from "preact/hooks";

const useCount = (initialCount: number) => {
	const [count, setCount] = useState(initialCount);

	return { onClick: () => setCount(count + 1), children: count };
};

const PairedCount = pair(useCount);

const Component = ({ array = [] }) => (
	<ul>
		{array.map((key) => (
			<PairedCount key={key}>
				{(usePairedCount) => {
					const props = usePairedCount(key);

					return (
						<li>
							<button type="button" {...props} />
						</li>
					);
				}}
			</PairedCount>
		))}
	</ul>
);
```

### React

```tsx
/** @jsxImportSource react */
/** @jsxImportSourceTypes @types/react */
import { pair } from "@coven/pair/react";
// @deno-types="@types/react"
import { useState } from "react";

const useCount = (initialCount: number) => {
	const [count, setCount] = useState(initialCount);

	return { onClick: () => setCount(count + 1), children: count };
};

const PairedCount = pair(useCount);

const Component = ({ array = [] }) => (
	<ul>
		{array.map((key) => (
			<PairedCount key={key}>
				{(usePairedCount) => {
					const props = usePairedCount(key);

					return (
						<li>
							<button type="button" {...props} />
						</li>
					);
				}}
			</PairedCount>
		))}
	</ul>
);
```

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
