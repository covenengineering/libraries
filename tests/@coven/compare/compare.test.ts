import { CREATE_KIND, DELETE_KIND, UPDATE_KIND } from "@coven/compare";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { assertEquals } from "@std/assert";
import { _compare } from "./utils.ts";

const property1 = "property1";
const property2 = "property2";

Deno.test("Comparing same string yields nothing", () =>
	assertEquals(_compare("witch")("witch"), EMPTY_ARRAY));

Deno.test("Comparing same object yields nothing", () =>
	assertEquals(_compare(EMPTY_OBJECT)(EMPTY_OBJECT), EMPTY_ARRAY));

Deno.test("Comparing different string yields `UpdateDifference`", () =>
	assertEquals(_compare("witch")("cat"), [
		{
			kind: UPDATE_KIND,
			left: "witch",
			right: "cat",
		},
	]));

Deno.test("Comparing equal arrays yields nothing", () =>
	assertEquals(_compare(["witch"])(["witch"]), EMPTY_ARRAY));

Deno.test("Comparing different arrays yields `UpdateDifference`", () =>
	assertEquals(_compare(["witch"])(["cat"]), [
		{
			kind: UPDATE_KIND,
			left: "witch",
			path: [0],
			right: "cat",
		},
	]));

Deno.test("Comparing equal objects yields nothing", () =>
	assertEquals(
		_compare({ [property1]: "witch" })({ [property1]: "witch" }),
		EMPTY_ARRAY,
	));

Deno.test(
	"Comparing objects with different property values yields `UpdateDifference`",
	() =>
		assertEquals(
			_compare({ [property1]: "witch" })({ [property1]: "cat" }),
			[
				{
					kind: UPDATE_KIND,
					left: "witch",
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
			_compare({ [property1]: "witch" })({ [property2]: "witch" }),
			[
				{ kind: DELETE_KIND, left: "witch", path: [property1] },
				{ kind: CREATE_KIND, path: [property2], right: "witch" },
			],
		),
);

Deno.test("Comparing array with new items yields `CreateDifference`", () =>
	assertEquals(
		_compare([{ [property1]: "witch" }])([
			{ [property1]: "witch" },
			{ [property2]: "cat" },
		]),
		[{ kind: CREATE_KIND, path: [1], right: { [property2]: "cat" } }],
	));

Deno.test("Comparing array with less items yields `DeleteDifference`", () =>
	assertEquals(
		_compare([{ [property1]: "witch" }, { [property2]: "cat" }])([
			{ [property1]: "witch" },
		]),
		[
			{
				kind: DELETE_KIND,
				left: { [property2]: "cat" },
				path: [1],
			},
		],
	));

Deno.test("Comparing equal Date objects yields nothing", () =>
	assertEquals(_compare(new Date(0))(new Date(0)), EMPTY_ARRAY));

Deno.test("Comparing equal RegExp objects yields nothing", () =>
	assertEquals(_compare(/coven/gu)(/coven/gu), EMPTY_ARRAY));

Deno.test("Comparing equal URL objects yields nothing", () =>
	assertEquals(
		_compare(new URL("https://coven.engineering"))(
			new URL("https://coven.engineering"),
		),
		EMPTY_ARRAY,
	));

Deno.test("Comparing equal `Error` objects yields nothing", () =>
	assertEquals(
		_compare(Object.assign(new Error("witch"), { stack: "test" }))(
			Object.assign(new Error("witch"), { stack: "test" }),
		),
		EMPTY_ARRAY,
	));

Deno.test("Comparing equal `Map` objects yields nothing", () =>
	assertEquals(
		_compare(new Map([["coven", "witch"]]))(new Map([["coven", "witch"]])),
		EMPTY_ARRAY,
	));

Deno.test("Comparing equal `Set` objects yields nothing", () =>
	assertEquals(
		_compare(new Set(["witch"]))(new Set(["witch"])),
		EMPTY_ARRAY,
	));

Deno.test(
	"Comparing left `null` and right object yields `UpdateDifference`",
	() =>
		assertEquals(_compare(null)(EMPTY_OBJECT), [
			{
				kind: UPDATE_KIND,
				left: null,
				right: EMPTY_OBJECT,
			},
		]),
);

Deno.test(
	"Comparing right `null` and left object yields `UpdateDifference`",
	() =>
		assertEquals(_compare(EMPTY_OBJECT)(null), [
			{ kind: UPDATE_KIND, left: EMPTY_OBJECT, right: null },
		]),
);

Deno.test(
	"Comparing a real array and a fake array yields `DeleteDifference`s",
	() =>
		assertEquals(
			_compare(["coven"])(
				Object.assign(Object.create(null), {
					0: "coven",
					constructor: Array,
					length: 1,
				}),
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
			).map((key) => ({
				kind: DELETE_KIND,
				left: Array.prototype[key],
				path: [key],
			})) as ReturnType<ReturnType<typeof _compare>>,
		),
);

Deno.test("Comparing 0 with -0 should yield `UpdateDifference`", () =>
	assertEquals(_compare(-0)(0), [
		{
			kind: UPDATE_KIND,
			left: -0,
			right: 0,
		},
	]));
