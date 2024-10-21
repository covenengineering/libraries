import type { Class } from "@coven/types";

/**
 * Function that checks if a given `input` is an `instanceof` the given class.
 *
 * @template Expected Expected class type.
 */
export type IsInstanceOfFunction<Expected extends Class<never>> = (
	input: unknown,
) => input is InstanceType<Expected>;
