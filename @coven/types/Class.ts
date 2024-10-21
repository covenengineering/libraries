import type { ReadonlyArray } from "./ReadonlyArray.ts";

/**
 * This type is a generic constructor function, mainly used when taking a class
 * as an argument.
 *
 * @example
 * ```typescript
 * const example = (AClass: Class) => new AClass("test");
 * ```
 * @see {@linkcode ReadonlyArray}
 * @template Arguments Arguments of the class constructor.
 * @template Instance Instance of the class.
 */
export type Class<
	Arguments extends ReadonlyArray = ReadonlyArray,
	Instance = unknown,
> = new (...constructorArguments: Arguments) => Instance;
