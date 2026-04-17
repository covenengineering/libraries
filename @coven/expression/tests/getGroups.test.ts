import { EMPTY_OBJECT } from "@coven/constants";
import { memo } from "@coven/memo";
import { assertStrictEquals } from "@std/assert";
import { buildUnicode } from "../buildUnicode.ts";
import { captureNamed } from "../captureNamed.ts";
import { getGroups } from "../getGroups.ts";
import { WILDCARD } from "../WILDCARD.ts";

Deno.test("Groups captured correctly", () =>
	assertStrictEquals(
		getGroups<readonly ["example"]>(
			buildUnicode(captureNamed("example")(WILDCARD)),
		)("🔮"),
		memo({ example: "🔮" }),
	),
);

Deno.test("When not found, return empty object", () =>
	assertStrictEquals(
		getGroups<readonly ["example"]>(
			buildUnicode(captureNamed("example")(WILDCARD)),
		)(""),
		EMPTY_OBJECT,
	),
);
