![Simulcast Preact][logo]

[![JSR][jsr-version-badge]][jsr-link] [![JSR Score][jsr-score-badge]][jsr-score]
[![Coverage Status][coverage-badge]][coverage]

📡 [Preact][preact] hook for [`@simulcast/core`][simulcast-core].

## Example

```tsx
import { broadcast } from "@simulcast/core";
import { useBroadcast } from "@simulcast/preact";
import type { JSX } from "preact";

const { registry } = broadcast<{
	click: JSX.TargetedMouseEvent<HTMLButtonElement>;
}>();

const Component = () => {
	const { emitClick, onClick } = useBroadcast(registry);

	onClick(console.log);

	return (
		<button onClick={emitClick} type="button">
			Click me!
		</button>
	);
};
```

<!-- Links -->

[coven-engineering]: https://coven.engineering
[coverage]:
	https://app.codecov.io/github/covenengineering/libraries%3Fcomponents%5B0%5D%3DSimulcast%20Preact
[coverage-badge]:
	https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=simulcast__preact&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff
[jsr-link]: https://simulcast.coven.to/preact
[jsr-score]: https://simulcast.coven.to/core/preact
[jsr-score-badge]: https://jsr.io/badges/@simulcast/preact/score
[jsr-version-badge]: https://jsr.io/badges/@simulcast/preact
[logo]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@simulcast/preact/logo.svg
[preact]: https://preactjs.com/
[simulcast-core]: https://simulcast.coven.to/core
