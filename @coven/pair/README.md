<!-- deno-coverage-ignore-file -->

![Coven Engineering Pair][logo]

[![JSR][jsr-version-badge]][jsr-link] [![JSR Score][jsr-score-badge]][jsr-score]
[![Coverage Status][coverage-badge]][coverage]

🖇️ [Paired hook pattern][the-paired-hook-pattern] helper. It only makes pairing
simpler and provides a little bit better DX (integration with React Devtools by
setting a `displayName` automatically), while also having 100% coverage like
with all [Coven Engineering][coven-engineering] libraries.

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

<!-- Links -->

[coven-engineering]: https://coven.engineering
[coverage]:
	https://app.codecov.io/github/covenengineering/libraries%3Fcomponents%5B0%5D%3DCoven%2520Engineering%2520Pair
[coverage-badge]:
	https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=coven__pair&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff
[jsr-link]: https://coven.to/pair
[jsr-score]: https://coven.to/pair/score
[jsr-score-badge]: https://jsr.io/badges/@coven/pair/score
[jsr-version-badge]: https://jsr.io/badges/@coven/pair
[logo]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@coven/pair/logo.svg
[the-paired-hook-pattern]: https://lou.cx/articles/the-paired-hook-pattern
