import { parseHTML } from "linkedom/worker";

if (globalThis.document === undefined || globalThis.window === undefined) {
	const { window, document } = parseHTML(`
		<html>
			<body>
				<div id="root" />
			</body>
		</html>
	`);

	Object.assign(globalThis, { document, window });
}
