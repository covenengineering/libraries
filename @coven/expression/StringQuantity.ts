import type { MaybeEmptyString } from "@coven/types";

export type StringQuantity =
	`${number}${MaybeEmptyString<",">}${MaybeEmptyString<`${number}`>}`;
