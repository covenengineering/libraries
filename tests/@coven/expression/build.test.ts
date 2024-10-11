import { build, group, or } from "@coven/expression";
import { assertEquals } from "@std/assert";

const regExp = /(?:13|coven)/u;
const createdRegExp = build()(group(or(13, "coven")));

Deno.test("a 1 and a 3 builds strings as 13", () =>
	assertEquals(
		{ flags: createdRegExp.flags, source: createdRegExp.source },
		{ flags: regExp.flags, source: regExp.source },
	));
