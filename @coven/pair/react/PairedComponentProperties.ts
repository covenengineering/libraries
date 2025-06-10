import type { PairedRenderFunction } from "./PairedRenderFunction.ts";

/**
 * Paired component properties (just children with the paired hook render function).
 *
 * @example
 * ```typescript
 * const Example = ({ children }: PairedComponentProperties<() => number>) => children(() => 13);
 * ```
 * @template Hook Hook function.
 */
export type PairedComponentProperties<
	Hook extends (...attributes: never) => unknown,
> = Readonly<{
	/**
	 * Children has to be a function, and the argument is the paired hook.
	 */
	children: PairedRenderFunction<Hook>;
}>;
