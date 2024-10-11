<img alt="Simulcast Core logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@simulcast/core/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@simulcast/core)](https://jsr.io/@simulcast/core)
[![JSR Score](https://jsr.io/badges/@simulcast/core/score)](https://jsr.io/@simulcast/core/score)

🔮 Communicate across framework like magic.

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
