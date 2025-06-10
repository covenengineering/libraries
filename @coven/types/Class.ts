/**
 * Type to represend a class, useful when taking a class as an argument.
 *
 * @example
 * ```typescript
 * const example = (AClass: Class) => new AClass("test");
 * ```
 * @template Arguments Arguments of the class constructor.
 * @template Instance Instance of the class.
 */
export type Class<
	Arguments extends ReadonlyArray<unknown> = ReadonlyArray<unknown>,
	Instance = unknown,
> = new (...constructorArguments: Arguments) => Instance;
