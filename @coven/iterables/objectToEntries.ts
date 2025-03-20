import type { Entry, ReadonlyRecord } from "@coven/types";
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
export const objectToEntries = <Key extends PropertyKey, Value>(
	input: ReadonlyRecord<Key, Value>,
): IterableIterator<Entry<Key extends number ? `${Key}` : Key, Value>> =>
	iteratorFunctionToIterableIterator(function* (): Generator<
		Entry<Key extends number ? `${Key}` : Key, Value>
	> {
		yield* Iterator.from(Reflect.ownKeys(input)).map(key => [
			key as Key extends number ? `${Key}` : Key,
			input[key as keyof ReadonlyRecord<Key, Value>],
		]);
	});
