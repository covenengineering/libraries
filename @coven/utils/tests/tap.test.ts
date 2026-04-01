import { assertEquals } from "@std/assert";
import { tap } from "../tap.ts";

let tapped = false;
const tappedTest = tap((parameter: boolean) => (tapped = parameter))(
	(_parameter: boolean) => "✨",
);
const EXPECTED = true;

Deno.test("Tapped function returns expected value but runs tapper first", () =>
	assertEquals([tappedTest(EXPECTED), tapped], ["✨", EXPECTED]),
);
