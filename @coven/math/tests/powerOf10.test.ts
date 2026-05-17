import { assertStrictEquals } from "@std/assert";
import { powerOf10 } from "../powerOf10.ts";

Deno.test(
	"Using powerOf10 returns the same result doing ** directly would",
	() => assertStrictEquals(powerOf10(13n), 10n ** 13n),
);
