import type { Either } from "./Either.ts";
import type { Just } from "./Just.ts";

/**
 * Value that could be `undefined`.
 *
 * @example
 * ```typescript
 * type MaybeNumber = Maybe<number>;
 *
 * const maybeNumber = 1 as const satisfies MaybeNumber;
 * const notNumber = undefined satisfies MaybeNumber;
 * ```
 * @see {@link Either}
 * @see {@link Just}
 * @template OptionalType The type of the value to make optional.
 */
export type Maybe<OptionalType> = Either<Just<OptionalType>, undefined>;
