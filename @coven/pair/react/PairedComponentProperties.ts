import type { PairedRenderFunction } from "./PairedRenderFunction.ts";

/**
 * Paired component properties (just children with the paired hook render function).
 *
 * @category Internal
 */
export type PairedComponentProperties<
	Hook extends (...attributes: never) => unknown,
> = {
	/**
	 * Children has to be a function, and the argument is the paired hook.
	 */
	readonly children: PairedRenderFunction<Hook>;
};
