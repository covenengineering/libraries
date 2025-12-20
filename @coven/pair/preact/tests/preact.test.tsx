import { pair, type PairedComponentProperties } from "@coven/pair/preact";
import { assertStrictEquals } from "@std/assert";
import { renderToString } from "preact-render-to-string";
import { useState } from "preact/hooks";

const Render = (usePairedState: typeof useState) => {
	const [count, setCount] = usePairedState(0);

	return (
		<button onClick={() => setCount(count + 1)} type="button">
			{count}
		</button>
	);
};

const Wanted = ({ children }: PairedComponentProperties<typeof useState>) =>
	children(useState);

const key = "TEST";

const PairedState = pair(useState);

Deno.test(
	"Generated HTML with a prop should be the same from using `pair` or doing everything manually",
	() =>
		assertStrictEquals(
			renderToString(<PairedState key={key}>{Render}</PairedState>),
			renderToString(<Wanted key={key}>{Render}</Wanted>),
		),
);

Deno.test(
	"Generated HTML should be the same from using `pair` or doing everything manually",
	() =>
		assertStrictEquals(
			renderToString(<PairedState>{Render}</PairedState>),
			renderToString(<Wanted>{Render}</Wanted>),
		),
);

Deno.test(
	"Paired hook has a displayName that reflects it's a paired hook",
	() =>
		assertStrictEquals(PairedState.displayName, `paired(${useState.name})`),
);
