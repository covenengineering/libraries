import { memo } from "@coven/memo";
import { assertStrictEquals } from "@std/assert";
import { buildUnicode } from "../buildUnicode.ts";
import { captureNamed } from "../captureNamed.ts";
import { getGroups } from "../getGroups.ts";
import { WILDCARD } from "../WILDCARD.ts";

Deno.test("Groups captured correctly", () =>
	assertStrictEquals(
		getGroups<["example"]>(buildUnicode(captureNamed("example")(WILDCARD)))(
			"🔮",
		),
		memo({ example: "🔮" }),
	),
);
