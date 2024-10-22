import type { ReadonlyArray } from "@coven/types";
import type { RecursiveMap } from "./RecursiveMap.ts";
import { ROOT_SYMBOL } from "./ROOT_SYMBOL.ts";

/**
 * Given an `array` of values, it generates a recursively nested Map.
 *
 * @internal
 * @example
 * ```typescript
 * const map = new Map();
 *
 * mapSetRecursive(map, [1, 2, 3], "1.2.3");
 * // [
 * // 	[1, [
 * // 		[2, [
 * // 			[3, [
 * // 				[ROOT_SYMBOL, "1.2.3"]
 * // 			]]
 * // 		]]
 * // 	]]
 * // ]
 *
 * mapSetRecursive(map, [1, 2], "1.2");
 * // [
 * // 	[1, [
 * // 		[2, [
 * // 			[ROOT_SYMBOL, "1.2"],
 * // 			[3, [
 * // 				[ROOT_SYMBOL, "1.2.3"]
 * // 			]]
 * // 		]]
 * // 	]]
 * // ]
 * ```
 * @param map Map to be mutated.
 * @param array Array of nested keys.
 * @param value Value to set.
 */
export const mapSetRecursive = (
	map: Map<unknown, unknown>,
	array: ReadonlyArray,
	value: unknown,
): undefined =>
	void (array.reduce<Map<unknown, unknown>>(
		(currentMap, item) => ((currentMap as RecursiveMap)?.get(item) ??
			(currentMap as RecursiveMap)?.set(item, new Map())?.get(
				item,
			) as RecursiveMap),
		map as RecursiveMap,
	)?.set(ROOT_SYMBOL, value));
