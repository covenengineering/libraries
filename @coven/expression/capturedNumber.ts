import { escape } from "./escape.ts";

/**
 * Matches the results of a capture group. For example \1 matches the results of
 * the first capture group & \3 matches the third.
 */
export const capturedNumber = escape as <const GroupNumber extends number>(
	groupNumber: GroupNumber,
) => ReturnType<typeof escape<GroupNumber>>;
