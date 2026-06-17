![Simulcast Core][logo]

[![JSR][jsr-version-badge]][jsr-link] [![JSR Score][jsr-score-badge]][jsr-score]
[![Coverage Status][coverage-badge]][coverage]

📡 Cross-framework communication.

This library is an extremely minimal pub-sub implementation that uses iterables
to make the dispatched events as responsive as possible for users.

The main idea behind this library is to make communication between different
frameworks or even between vanilla JS and frameworks extremely easy to
implement. This is specially useful when migrating from one framework to
another.

The library can be used directly, or through some of the framework specific
adapters like [`@simulcast/react`][simulcast-react]. Because it uses really
simple structures, it can be consumed from pretty much any place that supports
JavaScript.

Like all [Coven Engineering][coven-engineering] libraries, it has 100% test
coverage and it's built in top of modern tech compatible with all JavaScript
runtimes.

## Example

```typescript
import { broadcast } from "@simulcast/core";

const { onEvent, emitEvent } = broadcast<{ event: string }>();

const offEvent = onEvent(console.log);

emitEvent("Hello world 1"); // Logs "Hello world 1"
emitEvent("Hello world 2"); // Logs "Hello world 2"
offEvent();
emitEvent("Nope"); // Nothing happens
```

<!-- Links -->

[coven-engineering]: https://coven.engineering
[coverage]:
	https://app.codecov.io/github/covenengineering/libraries%3Fcomponents%5B0%5D%3DSimulcast%20Core
[coverage-badge]:
	https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=simulcast__core&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff
[jsr-link]: https://simulcast.coven.to/core
[jsr-score]: https://simulcast.coven.to/core/score
[jsr-score-badge]: https://jsr.io/badges/@simulcast/core/score
[jsr-version-badge]: https://jsr.io/badges/@simulcast/core
[logo]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@simulcast/core/logo.svg
[simulcast-react]: https://simulcast.coven.to/react
