import { buildUnicode, group, or } from "@coven/expression";
import { assertEquals } from "@std/assert";

const regExp = /(?:13|coven)/u;
const createdRegExp = buildUnicode(group(or(13, "coven")));

Deno.test('Grouping 13 and the string "coven" returns expected RegExp', () =>
	assertEquals(
		{ flags: createdRegExp.flags, source: createdRegExp.source },
		{ flags: regExp.flags, source: regExp.source },
	),
);
