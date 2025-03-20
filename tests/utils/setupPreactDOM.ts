import { parseHTML } from "linkedom/worker";

if (globalThis.document === undefined) {
	const { document } = parseHTML(`
		<html>
			<body>
				<div id="root" />
			</body>
		</html>
	`);

	Object.assign(globalThis, { document });
}
