import { groupBy } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const string1 = "string1";
const string2 = "string2";
const stringArray = [string1, string2, string1, string2];
const numberArray = [0, 1, 2, 3];

Deno.test(
	"an array of strings and a grouper by string groups by the string in the array",
	() =>
		assertEquals(groupBy((groupName: string) => groupName)(stringArray), {
			[string1]: [string1, string1],
			[string2]: [string2, string2],
		}),
);

Deno.test(
	"an array of numbers and a grouper by even/odd groups bu evens/odss",
	() =>
		assertEquals(
			groupBy((value: number) => (value % 2 === 0 ? "even" : "odd"))(
				numberArray,
			),
			{ even: [0, 2], odd: [1, 3] },
		),
);
