![Simulcast React][logo]

[![JSR][jsr-version-badge]][jsr-link] [![JSR Score][jsr-score-badge]][jsr-score]
[![Coverage Status][coverage-badge]][coverage]

📡 [React][react] hook for [`@simulcast/core`][simulcast-core].

## Example

```tsx
import { broadcast } from "@simulcast/core";
import { useBroadcast } from "@simulcast/react";
import type { MouseEvent } from "react";

const { registry } = broadcast<{ click: MouseEvent<HTMLButtonElement> }>();

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
	https://app.codecov.io/github/covenengineering/libraries%3Fcomponents%5B0%5D%3DSimulcast%20React
[coverage-badge]:
	https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=simulcast__react&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff
[jsr-link]: https://simulcast.coven.to/react
[jsr-score]: https://simulcast.coven.to/core/react
[jsr-score-badge]: https://jsr.io/badges/@simulcast/react/score
[jsr-version-badge]: https://jsr.io/badges/@simulcast/react
[logo]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@simulcast/react/logo.svg
[react]: https://react.dev/
[simulcast-core]: https://simulcast.coven.to/core
