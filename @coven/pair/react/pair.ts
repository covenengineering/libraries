import type { FunctionComponent } from "react";
import { pair as preactPair } from "../preact/pair.ts";
import type { PairedComponentProperties } from "./PairedComponentProperties.ts";

/**
 * Creates a component with a function children that has the given hook in context.
 *
 * @example
 * ```tsx
 * /** @jsxImportSource react *\/
 * import { useState } from "react";
 * import { createElement, useState } from "react";
 *
 * const useCount = (initialCount: number) => {
 * 	const [count, setCount] = useState(initialCount);
 *
 * 	return { onClick: () => setCount(count + 1), children: count };
 * };
 *
 * const PairedCount = pair(useCount);
 *
 * const Component = ({ array = [] }) => (
 * 	<ul>
 * 		{array.map(key => (
 * 			<PairedCount key={key}>
 * 				{usePairedCount => {
 * 					const properties = usePairedCount(key);
 *
 * 					return (
 * 						<li>
 * 							<button
 * 								type="button"
 * 								{...properties}
 * 							/>
 * 						</li>
 * 					);
 * 				}}
 * 			</PairedCount>
 * 		))}
 * 	</ul>
 * );
 * ```
 * @param hook Hook to be paired.
 * @returns Component that expects a function as children with the paired hook.
 */
export const pair = preactPair as <
	Hook extends (...attributes: never) => unknown,
>(
	hook: Hook,
) => FunctionComponent<PairedComponentProperties<Hook>>;
