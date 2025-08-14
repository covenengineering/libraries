import { memo } from "@coven/memo";
import type { Stringable } from "@coven/types";
import { escape } from "./escape.ts";

/**
 * Refer a submatch of a previous
 * [named capturing group](https://coven.to/mdn/Regular_expressions/Named_capturing_group)
 * and matches the same text as that group. For
 * [unnamed capturing groups](https://coven.to/mdn/Regular_expressions/Capturing_group),
 * you need to use the normal
 * [backreference](https://coven.to/mdn/Regular_expressions/Backreference)
 * syntax.
 *
 * @example Create named backreference
 * ```typescript
 * namedBackreference("✨"); // "\k<✨>"
 * ```
 * @see [Named backreference](https://coven.to/mdn/Regular_expressions/Named_backreference)
 * @param name name of a capturing group.
 * @returns Named backreference to the given `name`.
 */
export const namedBackreference: <const Name extends Stringable>(
	name: Name,
) => `\\k<${Name}>` = memo((name) => escape(`k<${name}>`));
