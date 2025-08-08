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
	template = `
		<html>
			<body>
				<div id="root" />
			</body>
		</html>
	`,
): void => {
	const parsed = parseHTML(template);

	properties.forEach(property =>
		Object.assign(globalThis, { [property]: parsed[property] }),
	);
};
