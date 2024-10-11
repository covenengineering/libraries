import { map } from "@coven/iterables";
import type { Maybe } from "@coven/types";
import type { AllToken } from "./AllToken.ts";
import type { CronObject } from "./CronObject.ts";
import type { ListField } from "./ListField.ts";
import { parseField } from "./parseField.ts";
import type { RangeField } from "./RangeField.ts";

/**
 * Given an iterable of tuples with the name of a field and a field value,
 * run each field through {@link parseField}.
 *
 * @example
 * ```typescript
 * parseFieldTuplesMap([["minute", "*"]]); // [["minute", "*"]]
 * parseFieldTuplesMap([["minute", "13"]]); // [["minute", 13]]
 * parseFieldTuplesMap([["minute", "10,11,13"]]); // [["minute", [10, 11, 13]]]
 * parseFieldTuplesMap([["minute", "1-10"]]); // [["minute", { from: 1, to: 10 }]]
 * ```
 * @see {@link parseField}
 */
export const parseFieldTuplesMap: (
	fieldTuples: Iterable<readonly [name: keyof CronObject, field: string]>,
) => IterableIterator<
	readonly [
		name: keyof CronObject,
		parsedField:
			| AllToken
			| Maybe<number>
			| RangeField<number>
			| ListField<number>,
	]
> = map(
	([name, field]: readonly [name: keyof CronObject, field: string]) =>
		[name, parseField(field)] as const,
);