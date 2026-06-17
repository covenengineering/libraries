![Simulcast Vue][logo]

[![JSR][jsr-version-badge]][jsr-link] [![JSR Score][jsr-score-badge]][jsr-score]
[![Coverage Status][coverage-badge]][coverage]

📡 [Vue][vue] hook for [`@simulcast/core`][simulcast-core].

## Example

```vue
<script setup>
	import { broadcast } from "@simulcast/core";
	import { useBroadcast } from "@simulcast/vue";

	const { registry } = broadcast<{ click: MouseEvent }>();
	const { emitClick, onClick } = useBroadcast(registry);

	onClick(console.log);
</script>

<template>
	<button @click="emitClick" type="button"> Click me! </button>
</template>
```

<!-- Links -->

[coven-engineering]: https://coven.engineering
[coverage]:
	https://app.codecov.io/github/covenengineering/libraries%3Fcomponents%5B0%5D%3DSimulcast%20vue
[coverage-badge]:
	https://img.shields.io/codecov/c/github/covenengineering/libraries?color=%23083344&component=simulcast__vue&label=Codecov&labelColor=%23F01F7A&logo=Codecov&logoColor=%23fff
[jsr-link]: https://simulcast.coven.to/vue
[jsr-score]: https://simulcast.coven.to/core/vue
[jsr-score-badge]: https://jsr.io/badges/@simulcast/vue/score
[jsr-version-badge]: https://jsr.io/badges/@simulcast/vue
[logo]:
	https://raw.githubusercontent.com/covenengineering/libraries/main/@simulcast/vue/logo.svg
[vue]: https://vuejs.org/
[simulcast-core]: https://simulcast.coven.to/core
