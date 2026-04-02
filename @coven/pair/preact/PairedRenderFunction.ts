import type { Unary } from "@coven/types";
// FIXME: Uncomment once this is fixed: https://github.com/denoland/deno/issues/27364
// import type { Attributes, VNode } from "preact";

/** @internal */
type Attributes = import("preact").Attributes;

/** @internal */
type VNode<P = object> = import("preact").VNode<P>;

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
