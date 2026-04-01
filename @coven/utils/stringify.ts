import type { Nullary, ReadonlyRecord, Stringable } from "@coven/types";

/**
 * Given a type that has the method `toString`, return the string value for it.
 *
 * @example
 * ```typescript
 * stringify(13); // "13"
 * stringify(13n); // "13"
 * stringify(undefined); // "undefined"
 * ```
 */
export const stringify = <
	Value extends ReadonlyRecord<"toString", Nullary<string>> | null,
>(
	value?: Value,
): Value extends Stringable ? `${Value}` : string =>
	// deno-lint-ignore coven/no-null
	`${value === null ? value : value?.toString()}` as Value extends (
		Stringable
	) ?
		`${Value}`
	:	string;
