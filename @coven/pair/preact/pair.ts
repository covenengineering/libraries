import type { FunctionComponent } from "preact";
import type { PairedComponentProperties } from "./PairedComponentProperties.ts";

/**
 * Creates a component with a function children that has the given hook in context.
 *
 * @example
 * ```tsx
 * import { useState } from "preact/hooks";
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
export const pair = <Hook extends (...attributes: never) => unknown>(
	hook: Hook,
): FunctionComponent<PairedComponentProperties<Hook>> =>
	Object.assign(
		({ children }: PairedComponentProperties<Hook>) => children(hook),
		{ displayName: `paired(${hook.name})` },
	);
