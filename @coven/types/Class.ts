/**
 * Type to represend a class, useful when taking a class as a parameter.
 *
 * @example
 * ```typescript
 * const example = (AClass: Class<[test: string]>) => new AClass("test");
 * ```
 * @template Parameters Parameters of the class constructor.
 * @template Instance Instance of the class.
 */
export type Class<
	Parameters extends ReadonlyArray<unknown> = ReadonlyArray<never>,
	Instance = unknown,
> = new (...parameters: Parameters) => Instance;
