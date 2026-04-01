import type { EntryOf, KeyOf } from "@coven/types";
import { iteratorFunctionToIterableIterator } from "./iteratorFunctionToIterableIterator.ts";

/**
 * Yields all entries of an object (including symbols).
 *
 * @example
 * ```typescript
 * const entries = objectToEntries({ a: 1, b: 2 });
 * entries.next(); // { value: ["a", 1], done: false }
 * entries.next(); // { value: ["b", 2], done: false }
 * entries.next(); // { value: undefined, done: true }
 * ```
 * @param input Object to get entries from.
 * @returns Iterable with entries of the given object (including symbols).
 */
export const objectToEntries = <
	const Input extends Record<PropertyKey, unknown>,
>(
	input: Input,
): IterableIterator<EntryOf<Input>> =>
	iteratorFunctionToIterableIterator(function* (): Generator<EntryOf<Input>> {
		yield* Iterator.from(Reflect.ownKeys(input)).map(
			(key) =>
				[
					key as KeyOf<Input>,
					input[key as KeyOf<Input>],
				] as EntryOf<Input>,
		);
	});
