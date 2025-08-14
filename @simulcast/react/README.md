<img alt="Simulcast React logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@simulcast/react/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@simulcast/react)](https://simulcast.coven.to/react)
[![JSR Score](https://jsr.io/badges/@simulcast/react/score)](https://simulcast.coven.to/react/score)

📡 [React](https://react.dev/) hook for
[`@simulcast/core`](https://simulcast.coven.to/core).

## Example

```tsx
/** @jsxImportSource react */
import { broadcast } from "@simulcast/core";
import { useBroadcast } from "@simulcast/react";
import type { MouseEvent } from "react";

const { registry } = broadcast<{
	click: MouseEvent<HTMLButtonElement>;
}>();

const Component = () => {
	const { emitClick, onClick } = useBroadcast(registry);

	onClick(console.log);

	return (
		<button
			onClick={emitClick}
			type="button"
		>
			Click me!
		</button>
	);
};
```

## Other links

- [Coverage](https://app.codecov.io/github/covenengineering/libraries).
