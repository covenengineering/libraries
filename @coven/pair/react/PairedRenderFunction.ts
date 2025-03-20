import type { Unary } from "@coven/types";
import type { ReactElement } from "react";

/**
 * Function that receives the paired hook and must return a `ReactElement`.
 *
 * @example
 * ```tsx
 * import { createElement, Fragment } from "react";
 *
 * const Example: PairedRenderFunction<() => number> = hook =>
 * 	<Fragment>{hook()}</Fragment>;
 * ```
 * @template Hook Hook function.
 */
export type PairedRenderFunction<
	Hook extends (...attributes: never) => unknown,
> = Unary<[hook: Hook], ReactElement>;
