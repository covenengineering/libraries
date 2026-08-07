import { assert, assertFalse } from "@std/assert";
import { isValidExpression } from "../isValidExpression.ts";

Deno.test("String that is a * returns false", () =>
	assertFalse(isValidExpression("*")),
);

const shortMonths = [
	[4, "apr"],
	[6, "jun"],
	[9, "sep"],
	[11, "nov"],
] as const;

const getAllVariations = ([number, name]: readonly [
	number: number,
	name: string,
]) => {
	const stringNumber = `${number}`;
	const paddedStringNumber = stringNumber.padStart(2, "0");
	const ranges = [
		`${stringNumber}-${stringNumber}`,
		`${stringNumber}-${paddedStringNumber}`,
		`${stringNumber}-${name}`,
		`${paddedStringNumber}-${stringNumber}`,
		`${paddedStringNumber}-${paddedStringNumber}`,
		`${paddedStringNumber}-${name}`,
		`${name}-${stringNumber}`,
		`${name}-${paddedStringNumber}`,
		`${name}-${name}`,
	];
	const lists = [
		`${stringNumber},${stringNumber}`,
		`${stringNumber},${paddedStringNumber}`,
		`${stringNumber},${name}`,
		`${paddedStringNumber},${stringNumber}`,
		`${paddedStringNumber},${paddedStringNumber}`,
		`${paddedStringNumber},${name}`,
		`${name},${stringNumber}`,
		`${name},${paddedStringNumber}`,
		`${name},${name}`,
	];

	return [stringNumber, paddedStringNumber, name, ...ranges, ...lists];
};

const shortMonthsInvalidExpressions = [
	...getAllVariations([2, "feb"]).flatMap(
		(month) =>
			[
				`* * 30 ${month} *`,
				`* * 31 ${month} *`,
				`* * 30-30 ${month} *`,
				`* * 30-31 ${month} *`,
				`* * 30,30 ${month} *`,
				`* * 30,31 ${month} *`,
				`* * 31-31 ${month} *`,
				`* * 31,31 ${month} *`,
			] as const,
	),
	...shortMonths
		.flatMap(getAllVariations)
		.flatMap(
			(month) =>
				[
					`* * 31 ${month} *`,
					`* * 31-31 ${month} *`,
					`* * 31,31 ${month} *`,
				] as const,
		),
];

Deno.test("Invalid ranges and lists returns false", () =>
	assert(
		shortMonthsInvalidExpressions.every(
			(expression) => !isValidExpression(expression),
		),
	),
);

Deno.test("Valid expression returns true", () =>
	assert(isValidExpression("* * * * *")),
);

Deno.test("Valid expression with irregular spacing returns true", () =>
	assert(isValidExpression("	* *  *   *    *	")),
);

Deno.test("Valid expression with all values set returns true", () =>
	assert(isValidExpression("1,2-5 1,2-5 1,2-5 1,2-5 1,2-5")),
);
