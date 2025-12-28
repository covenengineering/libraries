import type { Unary } from "@coven/types";
import type { Attributes, VNode } from "preact";

/**
 * Function that receives the paired hook and must return a `VNode`.
 *
 * @example
 * ```tsx
 * /** @jsxImportSource preact *\/
 * import { createElement, Fragment } from "preact";
 *
 * const Example: PairedRenderFunction<() => number> = hook =>
 * 	<Fragment>{hook()}</Fragment>;
 * ```
 * @template Hook Hook function.
 */
export type PairedRenderFunction<
	Hook extends (...attributes: never) => unknown,
> = Unary<[hook: Hook], VNode<Attributes>>;
