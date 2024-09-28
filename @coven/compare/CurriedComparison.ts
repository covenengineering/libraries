import type { ReadonlyIterator } from "@coven/types";
import type { Difference } from "./Difference.ts";

export type CurriedComparison<Right> = (
	right: Right,
) => ReadonlyIterator<Difference>;
