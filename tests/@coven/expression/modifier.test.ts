import { modifier } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test('Modifier "ims" applied to number 13', () =>
	assertStrictEquals(modifier("ims")(13), "(?ims:13)"),
);

Deno.test('Modifier "i-ms" applied to number 13', () =>
	assertStrictEquals(modifier("i-ms")(13), "(?i-ms:13)"),
);

Deno.test('Modifier "-i" applied to number 13', () =>
	assertStrictEquals(modifier("-i")(13), "(?-i:13)"),
);

Deno.test('Modifier "ims" applied to number 1, and number 3', () =>
	assertStrictEquals(modifier("ims")(1, 3), "(?ims:13)"),
);

Deno.test('Modifier "i-ms" applied to number 1, and number 3', () =>
	assertStrictEquals(modifier("i-ms")(1, 3), "(?i-ms:13)"),
);

Deno.test('Modifier "-i" applied to number 1, and number 3', () =>
	assertStrictEquals(modifier("-i")(1, 3), "(?-i:13)"),
);
