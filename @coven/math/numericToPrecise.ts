import { memoFunction } from "@coven/memo";
import { isBigInt } from "@coven/predicates";
import type { Numeric, Unary } from "@coven/types";
import { getNumberParts } from "./getNumberParts.ts";
import { numberPartsToPrecise } from "./numberPartsToPrecise.ts";
import { precise, type Precise } from "./precise.ts";
import { PRECISE_NAN } from "./PRECISE_NAN.ts";

/**
 * Create a {@linkcode Precise} from a {@linkcode Numeric}.
 */
export const numericToPrecise: Unary<[numeric: Numeric], Precise> =
	memoFunction((numeric) =>
		isBigInt(numeric) ? precise(BigInt(numeric), 0n)
		: Number.isFinite(numeric) ?
			Number.isInteger(numeric) ?
				precise(BigInt(numeric), 0n)
			:	numberPartsToPrecise(getNumberParts(numeric))
		:	PRECISE_NAN,
	);
