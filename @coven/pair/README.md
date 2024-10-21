<img alt="Coven Engineering Pair logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/pair/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@coven/pair)](https://jsr.io/@coven/pair)
[![JSR Score](https://jsr.io/badges/@coven/pair/score)](https://jsr.io/@coven/pair/score)

🖇️ [Paired hook pattern](https://lou.cx/articles/the-paired-hook-pattern)
helper.

## Examples

### Preact

```tsx
import { createElement } from "preact";
import { useState } from "preact/hooks";
import { pair } from "@coven/pair/preact";

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
// @deno-types="@types/react"
import { createElement, useState } from "react";
import { pair } from "@coven/pair/react";

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
