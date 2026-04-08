<img alt="Simulcast Preact logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@simulcast/preact/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@simulcast/preact)](https://simulcast.coven.to/preact)
[![JSR Score](https://jsr.io/badges/@simulcast/preact/score)](https://simulcast.coven.to/preact/score)
[![Coverage Status](https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=simulcast__preact&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff)](https://app.codecov.io/github/covenengineering/libraries?components[0]=Simulcast%20Preact)

📡 [Preact](https://preactjs.com/) hook for
[`@simulcast/core`](https://simulcast.coven.to/core).

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

## Other links

- [Coverage](https://app.codecov.io/github/covenengineering/libraries).
