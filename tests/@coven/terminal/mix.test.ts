import { format, mix } from "@coven/terminal";
import { assertEquals } from "@std/assert";

const first = format(13, 13);
const second = format(42, 42);
const mixed = mix(first, second);

Deno.test("Mix works", () =>
	assertEquals(
		mixed("Coven Engineering"),
		second(first("Coven Engineering")),
	));

Deno.test("Mix works as a template string tag function", () =>
	assertEquals(
		mixed`Coven Engineering ${13}`,
		second`${first`Coven Engineering ${13}`}`,
	));
