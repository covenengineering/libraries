import {
	compare,
	type CreateDifference,
	type DeleteDifference,
	type Difference,
	PATH,
	type UpdateDifference,
} from "@coven/compare";
import type { ReadonlyArray } from "@coven/types";

export const flatCompare = ({ [PATH]: path, ...difference }: Difference):
	& (
		| Omit<CreateDifference, "path">
		| Omit<DeleteDifference, "path">
		| Omit<UpdateDifference, "path">
	)
	& {
		readonly path?: ReadonlyArray<PropertyKey>;
	} => ({
		...difference,
		...(path ? ({ [PATH]: [...path] }) : undefined),
	});

/**
 * Deno's `assertEquals` can't deal with iterators, so let's turn them into arrays.
 */
export const _compare = (
	left: unknown,
): (
	right: unknown,
) => ReadonlyArray<
	ReturnType<typeof flatCompare>
> =>
(right: unknown) => [...compare(left)(right)].map(flatCompare);
