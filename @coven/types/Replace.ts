import type { ReadonlyRecord } from "./ReadonlyRecord.ts";

/**
 * Intersection that replaces properties in the `Original` type with the onces
 * in `Replacements`.
 *
 * @example
 * ```typescript
 * type User = { readonly name: string; readonly age: number };
 * type ReallyOldUser = Replace<User, { readonly age: bigint }>;
 * ```
 * @see {@linkcode ReadonlyRecord}
 * @template Original Type to replace the type of some keys in.
 * @template Replacements Property name to type dictionary of replacements.
 */
export type Replace<
	Original extends object,
	Replacements extends Partial<ReadonlyRecord<keyof Original>>,
> = Omit<Original, keyof Replacements> & Replacements;
