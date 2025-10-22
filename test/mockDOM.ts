import { parseHTML } from "linkedom/worker";

Error.stackTraceLimit = Infinity;

const properties = [
	"Element",
	"Node",
	"SVGElement",
	"document",
	"window",
] as const satisfies ReadonlyArray<keyof ReturnType<typeof parseHTML>>;

/**
 * Sets a global mocked DOM or resets it if it's already set.
 *
 * @param template Optional template.
 */
export const mockDOM = (
	{
		fakeTimers = false,
		template = `
			<html>
				<body>
					<div id="root"></div>
				</body>
			</html>
		`,
	}: {
		fakeTimers?: boolean;
		template?: string;
	} = {},
): void => {
	const parsed = parseHTML(template);

	properties.forEach((property) =>
		Object.assign(globalThis, { [property]: parsed[property] })
	);

	if (fakeTimers) {
		const { setTimeout, setInterval } = globalThis;

		globalThis.setTimeout = (handler, _timeout, ...args) =>
			setTimeout(handler, 0, ...args);

		globalThis.setInterval = (handler, _timeout, ...args) =>
			setInterval(handler, 0, ...args);
	}
};
