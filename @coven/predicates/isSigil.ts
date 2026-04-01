import { SIGIL } from "@coven/constants";
import { is } from "./is.ts";

/**
 * Checks if the given value is a Coven Engineering {@linkcode SIGIL}.
 *
 * @example
 * ```typescript
 * isSigil({}); // false
 * isSigil(Symbol()); // false
 * isSigil(Symbol("⛧")); // false
 * isSigil(Symbol.for("⛧")); // true
 * ```
 * @returns `true` if the given value is a Coven Engineering {@linkcode SIGIL},
 * `false` otherwise.
 */
export const isSigil: (actual: unknown) => actual is typeof SIGIL = is(SIGIL);
