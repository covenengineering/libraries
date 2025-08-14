import { memo } from "@coven/memo";
import type { Stringable, StringJoin } from "@coven/types";
import { capture } from "./capture.ts";
import { join } from "./join.ts";

/**
 * Helper for all groups that start with `?`.
 *
 * @example Create new capture type
 * ```typescript
 * captureType("✨")("🔮", "💀"); // "(?✨🔮💀)"
 * ```
 * @param type string that follows `?`.
 * @returns Curried function with `type` in context.
 */
export const captureType: <const Type extends Stringable>(
	type: Type,
) => <const Pattern extends ReadonlyArray<Stringable>>(
	...pattern: Pattern
) => `(?${Type}${StringJoin<Pattern>})` = memo(
	<const Type extends Stringable>(type: Type) =>
		memo(
			<const Pattern extends ReadonlyArray<Stringable>>(
				...pattern: Pattern
			) => capture(
				`?${type}${join(...pattern)}`,
			) as `(?${Type}${StringJoin<Pattern>})`,
		),
);
