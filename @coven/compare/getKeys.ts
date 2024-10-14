import { has, is, isObject } from "@coven/predicates";

const hasPrototype = has("prototype");
const isObjectConstructor = is(Object);
const isFunctionConstructor = is(Function);

/**
 * Recursively get all object keys going up the prototype chain.
 *
 * @example
 * ```typescript
 * getKeys([]); // yields "length", "map", and everything from `Array`
 * ```
 * @param object Object to get the keys from.
 * @yields Object keys.
 */
export const getKeys = function* (object: object): Generator<string | symbol> {
	yield* Reflect.ownKeys(object);

	hasPrototype(object) && isObject(object.prototype)
		? yield* Reflect.ownKeys(object.prototype)
		: undefined;

	const constructor = object.constructor;

	isObjectConstructor(constructor) ||
		isFunctionConstructor(constructor)
		? undefined
		: yield* getKeys(constructor);
};
