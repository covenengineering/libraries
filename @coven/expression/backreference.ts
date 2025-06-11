import { escape } from "./escape.ts";

/**
 * A backreference refers to the submatch of a previous
 * [capturing group](https://coven.to/mdn/Regular_expressions/Capturing_group)
 * and matches the same text as that group.
 *
 * @example Create a backreference to the given value
 * ```typescript
 * backreference(1); // "\1"
 * ```
 * @see [Backreference](https://coven.to/mdn/Regular_expressions/Backreference)
 * @param groupNumber A positive integer referring to the number of a capturing group
 * @returns Backreference to given `groupNumber`.
 */
export const backreference = escape as <const GroupNumber extends number>(
	groupNumber: GroupNumber,
) => ReturnType<typeof escape<GroupNumber>>;
