import { memoFunction } from "@coven/memo";
import type { Unary } from "@coven/types";
import type { NumberParts } from "./NumberParts.ts";
import { type Precise, precise } from "./precise.ts";

/**
 * Takes the output of `getNumberParts` and returns a {@linkcode Precise}.
 */
export const numberPartsToPrecise: Unary<[numberParts: NumberParts], Precise> =
	memoFunction(({ integral = "", fractional = "", exponent = "0" }) =>
		precise(
			BigInt(`${integral}${fractional}`),
			-(BigInt(fractional.length) - BigInt(exponent)),
		),
	);
