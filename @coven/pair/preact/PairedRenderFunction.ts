import type { Unary } from "@coven/types";
import type { h } from "preact";

/**
 * Function that receives the paired hook and must return a `VNode`.
 *
 * @category Internal
 */
export type PairedRenderFunction<
	Hook extends (...attributes: never) => unknown,
> = Unary<
	[hook: Hook],
	ReturnType<typeof h>
>;
