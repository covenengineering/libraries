import { memo } from "@coven/memo";
import type { Stringable, StringJoin } from "@coven/types";
import { captureType } from "./captureType.ts";

/**
 * A named capturing group is a particular kind of
 * [capturing group](https://coven.to/mdn/Regular_expressions/Capturing_group)
 * that allows to give a name to the group. The group's matching result can
 * later be identified by this name instead of by its index in the pattern.
 *
 * @example Create named capture group
 * ```typescript
 * captureNamed("✨")("🔮", "💀"); // "(?<✨>🔮💀)"
 * ```
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Named_capturing_group Named capturing grou})
 * @param groupName Name of the capture group.
 * @returns Curried function witn `groupName` in context.
 */
export const captureNamed: <const GroupName extends Stringable>(
	groupName: GroupName,
) => /**
 * @param pattern Pattern to capture.
 * @returns Named capture group with given `groupName`.
 */
<const Pattern extends ReadonlyArray<Stringable>>(
	...pattern: Pattern
) => `(?<${GroupName}>${StringJoin<Pattern>})` = memo((name) =>
	captureType(`<${name}>`),
);
