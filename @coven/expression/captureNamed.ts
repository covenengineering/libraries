import { memo } from "@coven/memo";
import type { EmptyString, Stringable, StringJoin } from "@coven/types";
import { captureType } from "./captureType.ts";

/**
 * Creates a capturing group that can be referenced via the specified name.
 */
export const captureNamed = memo(
	<const Name extends Stringable>(
		name: Name,
	): (<const Captured extends ReadonlyArray<Stringable>>(
		...captured: Captured
	) => `(?<${Name}>${StringJoin<Captured, EmptyString>})`) =>
		captureType(`<${name}>`),
);
