<img alt="Simulcast Preact logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@simulcast/preact/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@simulcast/preact)](https://jsr.io/@simulcast/preact)
[![JSR Score](https://jsr.io/badges/@simulcast/preact/score)](https://jsr.io/@simulcast/preact/score)

📡 Cross-framework communication.

[Preact](https://preactjs.com/) wrapper for
[`@simulcast/core`](https://jsr.io/@simulcast/core).

## Example

```tsx
import { createHooks } from "@simulcast/preact";
import type { JSX } from "preact";

const { useEmit, useOn } = createHooks<{
	click: JSX.TargetedMouseEvent<HTMLButtonElement>;
}>();

const Component = () => {
	const emitClick = useEmit("click");
	const onClick = useOn("click");

	onClick(console.log); // Will log event data every time the button below is clicked

	return <button onClick={emitClick}>Click me!</button>;
};
```

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
