import type { Either } from "./Either.ts";
import type { EmptyString } from "./EmptyString.ts";

/**
 * Union of the given string and {@link EmptyString}.
 *
 * @example
 * ```typescript
 * type MaybeHello = MaybeEmptyString<"hello">;
 *
 * const hello = "hello" as const satisfies MaybeHello;
 * const bye = "" as const satisfies MaybeHello;
 * ```
 * @see {@link Either}
 * @see {@link EmptyString}
 * @template String Type to unite with it's empty counterpart.
 */
export type MaybeEmptyString<String extends string> = Either<
	String,
	EmptyString
>;
