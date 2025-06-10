import {
	compare,
	CREATE_KIND,
	DELETE_KIND,
	flat,
	UPDATE_KIND,
} from "@coven/compare";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { createObject } from "@coven/utils";
import { assertEquals } from "@std/assert";

const property1 = "property1";
const property2 = "property2";

Deno.test("Comparing same string yields nothing", () =>
	assertEquals(flat(compare("magic")("magic")), EMPTY_ARRAY),
);

Deno.test("Comparing same object yields nothing", () =>
	assertEquals(flat(compare(EMPTY_OBJECT)(EMPTY_OBJECT)), EMPTY_ARRAY),
);

Deno.test("Comparing different string yields `UpdateDifference`", () =>
	assertEquals(flat(compare("magic")("cat")), [
		{
			kind: UPDATE_KIND,
			left: "magic",
			path: [],
			right: "cat",
		},
	]),
);

Deno.test("Comparing equal arrays yields nothing", () =>
	assertEquals(flat(compare(["magic"])(["magic"])), EMPTY_ARRAY),
);

Deno.test("Comparing different arrays yields `UpdateDifference`", () =>
	assertEquals(flat(compare(["magic"])(["cat"])), [
		{
			kind: UPDATE_KIND,
			left: "magic",
			path: [0],
			right: "cat",
		},
	]),
);

Deno.test("Comparing equal objects yields nothing", () =>
	assertEquals(
		flat(compare({ [property1]: "magic" })({ [property1]: "magic" })),
		EMPTY_ARRAY,
	),
);

Deno.test(
	"Comparing objects with different property values yields `UpdateDifference`",
	() =>
		assertEquals(
			flat(compare({ [property1]: "magic" })({ [property1]: "cat" })),
			[
				{
					kind: UPDATE_KIND,
					left: "magic",
					path: [property1],
					right: "cat",
				},
			],
		),
);

Deno.test(
	"Comparing objects with different property keys yields `UpdateDifference`",
	() =>
		assertEquals(
			flat(compare({ [property1]: "magic" })({ [property2]: "magic" })),
			[
				{ kind: DELETE_KIND, left: "magic", path: [property1] },
				{ kind: CREATE_KIND, path: [property2], right: "magic" },
			],
		),
);

Deno.test("Comparing array with new items yields `CreateDifference`", () =>
	assertEquals(
		flat(
			compare([{ [property1]: "magic" }])([
				{ [property1]: "magic" },
				{ [property2]: "cat" },
			]),
		),
		[{ kind: CREATE_KIND, path: [1], right: { [property2]: "cat" } }],
	),
);

Deno.test("Comparing array with less items yields `DeleteDifference`", () =>
	assertEquals(
		flat(
			compare([{ [property1]: "magic" }, { [property2]: "cat" }])([
				{ [property1]: "magic" },
			]),
		),
		[
			{
				kind: DELETE_KIND,
				left: { [property2]: "cat" },
				path: [1],
			},
		],
	),
);

Deno.test("Comparing equal Date objects yields nothing", () =>
	assertEquals(flat(compare(new Date(0))(new Date(0))), EMPTY_ARRAY),
);

Deno.test("Comparing equal RegExp objects yields nothing", () =>
	assertEquals(flat(compare(/coven/gu)(/coven/gu)), EMPTY_ARRAY),
);

Deno.test("Comparing equal URL objects yields nothing", () =>
	assertEquals(
		flat(
			compare(new URL("https://coven.engineering"))(
				new URL("https://coven.engineering"),
			),
		),
		EMPTY_ARRAY,
	),
);

Deno.test("Comparing equal `Error` objects yields nothing", () =>
	assertEquals(
		flat(
			compare(Object.assign(new Error("magic"), { stack: "test" }))(
				Object.assign(new Error("magic"), { stack: "test" }),
			),
		),
		EMPTY_ARRAY,
	),
);

Deno.test("Comparing equal `Map` objects yields nothing", () =>
	assertEquals(
		flat(
			compare(new Map([["coven", "magic"]]))(
				new Map([["coven", "magic"]]),
			),
		),
		EMPTY_ARRAY,
	),
);

Deno.test("Comparing equal `Set` objects yields nothing", () =>
	assertEquals(
		flat(compare(new Set(["magic"]))(new Set(["magic"]))),
		EMPTY_ARRAY,
	),
);

Deno.test(
	"Comparing left `null` and right object yields `UpdateDifference`",
	() =>
		assertEquals(flat(compare(null)(EMPTY_OBJECT)), [
			{
				kind: UPDATE_KIND,
				left: null,
				path: [],
				right: EMPTY_OBJECT,
			},
		]),
);

Deno.test(
	"Comparing right `null` and left object yields `UpdateDifference`",
	() =>
		assertEquals(flat(compare(EMPTY_OBJECT)(null)), [
			{ kind: UPDATE_KIND, left: EMPTY_OBJECT, path: [], right: null },
		]),
);

Deno.test(
	"Comparing a real array and a fake array yields `DeleteDifference`s",
	() =>
		assertEquals(
			flat(
				compare(["coven"])(
					createObject({
						0: "coven",
						constructor: Array,
						length: 1,
					}),
				),
			),
			(
				[
					"at",
					"concat",
					"copyWithin",
					"fill",
					"find",
					"findIndex",
					"findLast",
					"findLastIndex",
					"lastIndexOf",
					"pop",
					"push",
					"reverse",
					"shift",
					"unshift",
					"slice",
					"sort",
					"splice",
					"includes",
					"indexOf",
					"join",
					"keys",
					"entries",
					"values",
					"forEach",
					"filter",
					"flat",
					"flatMap",
					"map",
					"every",
					"some",
					"reduce",
					"reduceRight",
					"toReversed",
					"toSorted",
					"toSpliced",
					"with",
					"toLocaleString",
					"toString",
					Symbol.iterator,
					Symbol.unscopables,
				] as const
			).map(key => ({
				kind: DELETE_KIND,
				left: Array.prototype[key],
				path: [key],
			})) as ReturnType<typeof flat>,
		),
);

Deno.test("Comparing 0 with -0 should yield `UpdateDifference`", () =>
	assertEquals(flat(compare(-0)(0)), [
		{
			kind: UPDATE_KIND,
			left: -0,
			path: [],
			right: 0,
		},
	]),
);
