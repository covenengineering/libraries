// deno-coverage-ignore-file
import { Window } from "happy-dom";

const happyDOMWindow = new Window();

Object.assign(
	globalThis,
	Object.fromEntries(
		(
			[
				"Element", // Required by Vue
				"Node", // Required by Vue
				"SVGElement", // Required by Vue
				"document",
				"window",
			] as const satisfies ReadonlyArray<keyof Window>
		).map((key) => [key, happyDOMWindow[key]] as const),
	),
);
