/**
 * Possible `string` representations of `Precise`.
 */
export type PreciseString =
	"NaN" | `${"-" | ""}${`${bigint}` | `${bigint}.${bigint}`}`;
