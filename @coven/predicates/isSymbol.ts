import { isType } from "./isType.ts";
import type { IsTypeFunction } from "./IsTypeFunction.ts";

/**
 * `typeof value === "symbol"` check.
 *
 * @example
 * ```typescript
 * isSymbol(Symbol("Witch")); // true
 * isSymbol(Symbol.iterator); // true
 * isSymbol("Witch"); // false
 * ```
 * @param input Value to check.
 * @returns Returns `true` if value is a `symbol`, `false` otherwise.
 */
export const isSymbol: IsTypeFunction<"symbol"> = isType("symbol");
