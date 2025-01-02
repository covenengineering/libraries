/** @jsxImportSource react */
/** @jsxImportSourceTypes @types/react */
import { pair } from "@coven/pair/react";
// @deno-types="@types/react"
import { useState } from "react";

const useCount = (initialCount: number) => {
	const [count, setCount] = useState(initialCount);

	return { onClick: () => setCount(count + 1), children: count };
};

const PairedCount = pair(useCount);

const Component = ({ array = [] }) => (
	<ul>
		{array.map((key) => (
			<PairedCount key={key}>
				{(usePairedCount) => {
					const props = usePairedCount(key);

					return (
						<li>
							<button type="button" {...props} />
						</li>
					);
				}}
			</PairedCount>
		))}
	</ul>
);
