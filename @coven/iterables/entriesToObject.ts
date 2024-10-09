import { EMPTY_OBJECT } from "@coven/constants";
import type { Entry, EntryKey, EntryValue, ReadonlyRecord } from "@coven/types";
import { set } from "@coven/utils";
import { reduce } from "./reduce.ts";

/**
 * Takes an entries iterable and returns an object.
 *
 * @example
 * ```typescript
 * entriesToObject([["key", "value"]]); // { key: "value" }
 * entriesToObject([
 * 	["foo", "bar"],
 * 	["number", 1]
 * ]); // { foo: "bar", number: 1 }
 * ```
 * @returns Object constructed from entries.
 */
export const entriesToObject = reduce(
	<Key extends PropertyKey, Value>([key, value]: Entry<Key, Value>) =>
		set(key)(value) as (
			object: ReadonlyRecord<Key, Value>,
		) => typeof object,
)(EMPTY_OBJECT) as <Item extends Entry>(
	iterable: Iterable<Item>,
) => ReadonlyRecord<EntryKey<Item>, EntryValue<Item>>;
