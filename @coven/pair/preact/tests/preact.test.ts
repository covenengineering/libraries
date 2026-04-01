import { assertStrictEquals } from "@std/assert";
import { renderToString } from "preact-render-to-string";
import { useCallback, useState } from "preact/hooks";
import { jsx } from "preact/jsx-runtime";
import { pair } from "../pair.ts";
import type { PairedComponentProperties } from "../PairedComponentProperties.ts";

const Render = (usePairedState: typeof useState) => {
	const [count, setCount] = usePairedState(0);
	const onClick = useCallback(
		() => setCount((currentCount) => currentCount + 1),
		[],
	);

	return jsx("button", { children: count, onClick, type: "button" });
};

const Wanted = ({ children }: PairedComponentProperties<typeof useState>) =>
	children(useState);

const PairedState = pair(useState);

Deno.test(
	"Generated HTML with a prop should be the same from using `pair` or doing everything manually",
	() =>
		assertStrictEquals(
			renderToString(jsx(PairedState, { children: Render })),
			renderToString(jsx(Wanted, { children: Render })),
		),
);

Deno.test(
	"Generated HTML should be the same from using `pair` or doing everything manually",
	() =>
		assertStrictEquals(
			renderToString(jsx(PairedState, { children: Render })),
			renderToString(jsx(Wanted, { children: Render })),
		),
);

Deno.test(
	"Paired hook has a displayName that reflects it's a paired hook",
	() =>
		assertStrictEquals(PairedState.displayName, `paired(${useState.name})`),
);
