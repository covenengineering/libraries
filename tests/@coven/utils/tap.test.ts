import { tap } from "@coven/utils";
import { assertEquals } from "@std/assert";

let tapped = false;
const tappedTest = tap((argument: boolean) => (tapped = argument))(
	(_argument: boolean) => "🧙🏻‍♀️",
);
const EXPECTED = true;

Deno.test("Tapped function returns expected value but runs tapper first", () =>
	assertEquals([tappedTest(EXPECTED), tapped], ["🧙🏻‍♀️", EXPECTED]),
);
