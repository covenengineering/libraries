<img alt="Simulcast Vue logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@simulcast/vue/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@simulcast/vue)](https://simulcast.coven.to/vue)
[![JSR Score](https://jsr.io/badges/@simulcast/vue/score)](https://simulcast.coven.to/vue/score)

📡 [Vue](https://vuejs.org/) hook for
[`@simulcast/core`](https://simulcast.coven.to/core).

## Example

```vue
<script setup>
	import { broadcast } from "@simulcast/core";
	import { useBroadcast } from "@simulcast/vue";
	import type { MouseEvent } from "vue";

	const { registry } = broadcast<{ click: MouseEvent }>();
	const { emitClick, onClick } = useBroadcast(registry);

	onClick(console.log);
</script>

<template>
	<button
		@click="emitClick"
		type="button"
	>
		Click me!
	</button>
</template>
```

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
