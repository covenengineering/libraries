import {
	compare,
	type CreateDifference,
	type DeleteDifference,
	type Difference,
	type UpdateDifference,
} from "@coven/compare";
import type { ReadonlyArray } from "@coven/types";

export const flatCompare = ({
	path,
	...difference
}: Difference):
	& (
		| Omit<CreateDifference, "path">
		| Omit<DeleteDifference, "path">
		| Omit<UpdateDifference, "path">
	)
	& {
		readonly path?: ReadonlyArray<PropertyKey>;
	} => ({
		...difference,
		...(path ? { path: [...path] } : undefined),
	});

/**
 * Deno's `assertEquals` can't deal with iterators, so let's turn them into arrays.
 */
export const _compare = (
	left: unknown,
): (right: unknown) => ReadonlyArray<ReturnType<typeof flatCompare>> =>
(right: unknown) => [...compare(left)(right)].map(flatCompare);
