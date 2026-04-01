import { EMPTY_OBJECT } from "@coven/constants";
import { assertStrictEquals } from "@std/assert";
import { get } from "../get.ts";

const getMagic = get("✨");

const EXPECTED = true;

Deno.test(
	"Getter and an object with that property on it returns property value",
	() => assertStrictEquals(getMagic({ "✨": EXPECTED }), EXPECTED),
);

Deno.test(
	"Getter and an object without that property on it returns property value",
	() =>
		assertStrictEquals(
			getMagic(EMPTY_OBJECT as unknown as Readonly<{ "✨": boolean }>),
			undefined,
		),
);
