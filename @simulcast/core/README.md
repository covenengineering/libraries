<img alt="Simulcast Core logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@simulcast/core/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@simulcast/core)](https://simulcast.coven.to/core)
[![JSR Score](https://jsr.io/badges/@simulcast/core/score)](https://simulcast.coven.to/core/score)

📡 Cross-framework communication.

This library is an extremely minimal pub-sub implementation that uses iterables
to make the dispatched events as responsive as possible for users.

The main idea behind this library is to make communication between different
frameworks or even between vanilla JS and frameworks extremely easy to
implement. This is specially useful when migrating from one framework to
another.

The library can be used directly, or through some of the framework specific
adapters like [`@simulcast/react`](https://simulcast.coven.to/react). Because it
uses really simple structures, it can be consumed from pretty much any place
that supports JavaScript.

Like all [Coven Engineering](https://coven.engineering) libraries, it has 100%
test coverage and it's built in top of modern tech compatible with all
JavaScript runtimes.

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

## Other links

- [Coverage](https://app.codecov.io/github/covenengineering/libraries).
