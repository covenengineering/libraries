import { assertStrictEquals } from "@std/assert";
import { format } from "../format.ts";
import { mix } from "../mix.ts";

const first = format(13, 13);
const second = format(42, 42);
const mixed = mix(first, second);

Deno.test("Mix works", () =>
	assertStrictEquals(
		mixed("Coven Engineering"),
		second(first("Coven Engineering")),
	),
);

Deno.test("Mix works as a template string tag function", () =>
	assertStrictEquals(
		mixed`Coven Engineering ${13}`,
		second`${first`Coven Engineering ${13}`}`,
	),
);
