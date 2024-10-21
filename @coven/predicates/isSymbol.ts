import { isType } from "./isType.ts";
import type { IsTypeFunction } from "./IsTypeFunction.ts";

/**
 * `typeof value === "symbol"` check.
 *
 * @example
 * ```typescript
 * isSymbol(Symbol("Lou")); // true
 * isSymbol(Symbol.iterator); // true
 * isSymbol("Lou"); // false
 * ```
 * @param input Value to check.
 * @returns Returns `true` if value is a `symbol`, `false` otherwise.
 */
export const isSymbol: IsTypeFunction<"symbol"> = isType("symbol");
