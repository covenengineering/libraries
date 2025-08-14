import { EMPTY_ARRAY } from "@coven/constants";
import { toIterable } from "./toIterable.ts";

/**
 * IterableIterator that yields nothing. Useful for fallbacks
 */
export const EMPTY_ITERABLE_ITERATOR: IterableIterator<never> = toIterable(
	EMPTY_ARRAY,
);
