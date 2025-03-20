import {
	allow,
	DIGIT,
	END,
	exists,
	group,
	join,
	NOT_WHITESPACE,
	notCaptureNext,
	or,
	quantity,
	range,
	set,
	START,
	WHITESPACE,
} from "@coven/expression";
import { fieldRegExp } from "./fieldRegExp.ts";
import { paddedRegExp } from "./paddedRegExp.ts";
import { valueOrListRegExp } from "./valueOrListRegExp.ts";
import { valueRangeOrListRegExp } from "./valueRangeOrListRegExp.ts";

/**
 * Regular expression to test for valid cron expressions.
 *
 * @remarks
 * -   We allow 0 or more whitespace before and after the expression.
 * -   Negative lookahead to avoid impossible matches:
 * 	-   30 or 31 of February (Any combination like 30,31; 30-31; 30-30; etc.)
 * 	-   31 of February, April, Jun, September or November (also any combination).
 * -   Then we start capturing each field in a named group (separated with any
 * amount of whitespace):
 * 	-   `minute`: Digits from `0` to `59` (including padded like `05`).
 * 	-   `hour`: Digits from `0` to `23` (also including padded).
 * 	-   `dayOfMonth`: Digits from `0` to `31` (also including padded).
 * 	-   `month`: Digits from `1` to `12` (also including padded, and 3 letter
 * aliases like `oct`).
 * 	-   `dayOfWeek`: Digits from `0` to `6` (all padded, and also including 3
 * letter aliases like `fri`).
 * @example
 * ```typescript
 * new RegExp(cronRegExp).test("* * * * *"); // true
 * new RegExp(cronRegExp).test("nope"); // false
 * new RegExp(cronRegExp).test("* * 31 2 *"); // false
 * new RegExp(cronRegExp).test("* * 31 feb,4,6 *"); // false
 * new RegExp(cronRegExp).test("* * 31 feb,mar *"); // true
 * new RegExp(cronRegExp).test("1 2 3 4 5"); // true
 * ```
 */
export const cronRegExp: "^\\s*(?!(?:\\S+\\s+){2}(?:(?:(?:3[01](?:-3[01])?|(?:(?:3[01](?:-3[01])?,)+3[01](?:-3[01])?))\\s+(?:(?:0?2|feb)(?:-(?:0?2|feb))?|(?:(?:(?:0?2|feb)(?:-(?:0?2|feb))?,)+(?:0?2|feb)(?:-(?:0?2|feb))?)))|(?:(?:31(?:-31)?|(?:(?:31(?:-31)?,)+31(?:-31)?))\\s+(?:(?:0?[2469]|11|feb|apr|jun|sep|nov)|(?:(?:(?:0?[2469]|11|feb|apr|jun|sep|nov),)+(?:0?[2469]|11|feb|apr|jun|sep|nov)))))\\s+\\S+)(?<minute>\\*|(?:(?:0?\\d|[1-5]\\d)(?:-(?:0?\\d|[1-5]\\d))?|(?:(?:(?:0?\\d|[1-5]\\d)(?:-(?:0?\\d|[1-5]\\d))?,)+(?:0?\\d|[1-5]\\d)(?:-(?:0?\\d|[1-5]\\d))?)))\\s+(?<hour>\\*|(?:(?:0?\\d|1\\d|20-3)(?:-(?:0?\\d|1\\d|20-3))?|(?:(?:(?:0?\\d|1\\d|20-3)(?:-(?:0?\\d|1\\d|20-3))?,)+(?:0?\\d|1\\d|20-3)(?:-(?:0?\\d|1\\d|20-3))?)))\\s+(?<dayOfMonth>\\*|(?:(?:0?[1-9]|[12]\\d|3[01])(?:-(?:0?[1-9]|[12]\\d|3[01]))?|(?:(?:(?:0?[1-9]|[12]\\d|3[01])(?:-(?:0?[1-9]|[12]\\d|3[01]))?,)+(?:0?[1-9]|[12]\\d|3[01])(?:-(?:0?[1-9]|[12]\\d|3[01]))?)))\\s+(?<month>\\*|(?:(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|0?[1-9]|1[0-2])(?:-(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|0?[1-9]|1[0-2]))?|(?:(?:(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|0?[1-9]|1[0-2])(?:-(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|0?[1-9]|1[0-2]))?,)+(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|0?[1-9]|1[0-2])(?:-(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|0?[1-9]|1[0-2]))?)))\\s+(?<dayOfWeek>\\*|(?:(?:sun|mon|tue|wed|thu|fri|sat|0?[0-6])(?:-(?:sun|mon|tue|wed|thu|fri|sat|0?[0-6]))?|(?:(?:(?:sun|mon|tue|wed|thu|fri|sat|0?[0-6])(?:-(?:sun|mon|tue|wed|thu|fri|sat|0?[0-6]))?,)+(?:sun|mon|tue|wed|thu|fri|sat|0?[0-6])(?:-(?:sun|mon|tue|wed|thu|fri|sat|0?[0-6]))?)))\\s*$" =
	join(
		START,
		allow(WHITESPACE),
		notCaptureNext(
			quantity(2)(group(exists(NOT_WHITESPACE), exists(WHITESPACE))),
			group(
				or(
					group(
						valueRangeOrListRegExp(join(3, set(0, 1))),
						exists(WHITESPACE),
						valueRangeOrListRegExp(
							group(or(paddedRegExp(2), "feb")),
						),
					),
					group(
						valueRangeOrListRegExp(31),
						exists(WHITESPACE),
						valueOrListRegExp(
							group(
								or(
									paddedRegExp(set(2, 4, 6, 9)),
									11,
									"feb",
									"apr",
									"jun",
									"sep",
									"nov",
								),
							),
						),
					),
				),
			),
			exists(WHITESPACE),
			exists(NOT_WHITESPACE),
		),
		fieldRegExp(
			"minute",
			group(or(paddedRegExp(DIGIT), join(set(range(1)(5)), DIGIT))),
		),
		exists(WHITESPACE),
		fieldRegExp(
			"hour",
			group(
				or(paddedRegExp(DIGIT), join(1, DIGIT), join(2, range(0)(3))),
			),
		),
		exists(WHITESPACE),
		fieldRegExp(
			"dayOfMonth",
			group(
				or(
					paddedRegExp(set(range(1)(9))),
					join(set(1, 2), DIGIT),
					join(3, set(0, 1)),
				),
			),
		),
		exists(WHITESPACE),
		fieldRegExp(
			"month",
			group(
				or(
					"jan",
					"feb",
					"mar",
					"apr",
					"may",
					"jun",
					"jul",
					"aug",
					"sep",
					"oct",
					"nov",
					"dec",
					paddedRegExp(set(range(1)(9))),
					join(1, set(range(0)(2))),
				),
			),
		),
		exists(WHITESPACE),
		fieldRegExp(
			"dayOfWeek",
			group(
				or(
					"sun",
					"mon",
					"tue",
					"wed",
					"thu",
					"fri",
					"sat",
					paddedRegExp(set(range(0)(6))),
				),
			),
		),
		allow(WHITESPACE),
		END,
	);
