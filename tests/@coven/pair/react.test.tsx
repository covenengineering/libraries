/** @jsxImportSource react */
/** @jsxImportSourceTypes @types/react */
import { pair, type PairedComponentProperties } from "@coven/pair/react";
import { assertStrictEquals } from "@std/assert";
import { useState } from "react";
import { renderToString } from "react-dom/server";

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

Deno.test("Paired hook with key returns component wrapping hook and with key", () =>
	assertStrictEquals(
		renderToString(<PairedState key={key}>{Render}</PairedState>),
		renderToString(<Wanted key={key}>{Render}</Wanted>),
	));

Deno.test("Paired hook without key returns component wrapping hook and without key", () =>
	assertStrictEquals(
		renderToString(<PairedState>{Render}</PairedState>),
		renderToString(<Wanted>{Render}</Wanted>),
	));

Deno.test("Paired hook has a displayName that reflects it's a paired hook", () =>
	assertStrictEquals(
		PairedState.displayName,
		`paired(${useState.name})`,
	));
