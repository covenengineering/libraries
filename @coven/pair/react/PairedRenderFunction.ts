import type { Unary } from "@coven/types";
import type { createElement } from "react";

/**
 * Function that receives the paired hook and must return a `ReactElement`.
 *
 * @category Internal
 */
export type PairedRenderFunction<
	Hook extends (...attributes: never) => unknown,
> = Unary<
	[hook: Hook],
	ReturnType<typeof createElement>
>;
