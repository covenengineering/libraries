import { isObject } from "./isObject.ts";

/**
 * Recursively get all object keys going up the prototype chain.
 *
 * @example
 * ```typescript
 * getKeys([]); // yields "length", "map", and everything from `Array`
 * ```
 * @see {@link isObject}
 * @param object Object to get the keys from.
 * @yields Object keys.
 */
export const getKeys = function* (object: object): Generator<string | symbol> {
	yield* Reflect.ownKeys(object);

	"prototype" in object && isObject(object.prototype)
		? yield* Reflect.ownKeys(object.prototype)
		: undefined;

	object.constructor === Object || object.constructor === Function
		? undefined
		: yield* getKeys(object.constructor);
};
