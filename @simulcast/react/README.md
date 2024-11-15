<img alt="Simulcast React logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@simulcast/react/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@simulcast/react)](https://jsr.io/@simulcast/react)
[![JSR Score](https://jsr.io/badges/@simulcast/react/score)](https://jsr.io/@simulcast/react/score)

📡 Cross-framework communication.

[React](https://react.dev/) wrapper for
[`@simulcast/core`](https://jsr.io/@simulcast/core).

## Example

```tsx
import { createHooks } from "@simulcast/react";
import type { MouseEvent } from "react";

const { useEmit, useOn } = createHooks<{
	click: MouseEvent<HTMLButtonElement>;
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
