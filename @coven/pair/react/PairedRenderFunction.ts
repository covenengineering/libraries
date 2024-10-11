import type { Unary } from "@coven/types";
import type { createElement } from "react";

/**
 * Function that receives the paired hook and must return a `ReactElement`.
 *
 * @example
 * ```tsx
 * const Example: PairedRenderFunction<() => number> = hook => <>{hook()}</>;
 * ```
 * @template Hook Hook function.
 */
export type PairedRenderFunction<
	Hook extends (...attributes: never) => unknown,
> = Unary<
	[hook: Hook],
	ReturnType<typeof createElement>
>;
