import type { ReadonlyIterator } from "@coven/types";

/**
 * Empty iterator to use as initial value of Difference's `path`.
 */
export const basePath = function* (): ReadonlyIterator<PropertyKey> {};
