import type { Effect } from "@coven/types";
import { parseHTML } from "linkedom/worker";

export const setup = (): Effect => {
	const originals = { document: globalThis.document };

	const { document } = parseHTML(`
			<html>
				<body>
					<div id="root" />
				</body>
			</html>
		`);

	Object.assign(globalThis, { document });

	return (): void => void Object.assign(globalThis, originals);
};
