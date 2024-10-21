<img alt="Simulcast Core logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@simulcast/core/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@simulcast/core)](https://jsr.io/@simulcast/core)
[![JSR Score](https://jsr.io/badges/@simulcast/core/score)](https://jsr.io/@simulcast/core/score)

📡 Cross-framework communication.

This library is an extremely minimal pub-sub implementation that uses iterables
to make the dispatched events as responsive as possible for users.

The library can be used directly, or through some of the framework specific
wrappers like `@simulcast/react`. Because it uses really simple structures, it
can be consumed from pretty much any place that supports JavaScript.

As all [Coven Engineering](https://coven.engineering) libraries, it has 100%
test coverage and it's built in top of modern tech compatible with all
JavaScript runtimes.

## Example

```typescript
import { broadcast } from "@simulcast/core";

const { emit, on } = broadcast<{ event: string }>();

const onEvent = on("event");
const offEvent = onEvent(console.log);

const emitEvent = emit("event");
emitEvent("Hello world 1"); // Logs "Hello world 1"
emitEvent("Hello world 2"); // Logs "Hello world 2"
offEvent();
emitEvent("Nope"); // Nothing happens
```

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
