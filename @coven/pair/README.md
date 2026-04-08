<!-- deno-coverage-ignore-file -->

![Coven Engineering Pair](https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/pair/logo.svg)

[![JSR](https://jsr.io/badges/@coven/pair)](https://coven.to/pair)
[![JSR Score](https://jsr.io/badges/@coven/pair/score)](https://coven.to/pair/score)

🖇️ [Paired hook pattern](https://lou.cx/articles/the-paired-hook-pattern)
helper. It only makes pairing simpler and provides a little bit better DX
(integration with React Devtools by setting a `displayName` automatically),
while also having 100% coverage like with all
[Coven Engineering](https://coven.engineering) libraries.
[![Coverage Status](https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=coven__pair&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff)](https://app.codecov.io/github/covenengineering/libraries?components[0]=Coven%20Engineering%20Pair)

Currently supported frameworks:

- ⚛ Preact: `@coven/pair/preact`.
- ⚛ React: `@coven/pair/react`.

## Examples

### Preact

```tsx
/** @jsxImportSource preact */
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
/** @jsxImportSource react */
import { useState } from "react";
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

- [Coverage](https://app.codecov.io/github/covenengineering/libraries).
