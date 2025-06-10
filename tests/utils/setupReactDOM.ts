import { parseHTML } from "linkedom/worker";
import type { Effect } from "@coven/types";

export const setup = (): Effect => {
	const originals = {
		document: globalThis.document,
		window: globalThis.window,
	};

	const { window, document } = parseHTML(`
		<html>
			<body>
				<div id="root" />
			</body>
		</html>
	`);

	Object.assign(globalThis, { document, window });

	return (): void => void Object.assign(globalThis, originals);
};
