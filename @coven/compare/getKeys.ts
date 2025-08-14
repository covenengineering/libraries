import { iteratorFunctionToIterableIterator, unique } from "@coven/iterables";
import { hasPrototype, is } from "@coven/predicates";

const isObjectConstructor = is(Object);
const isFunctionConstructor = is(Function);

/**
 * Recursively get all object keys going up the prototype chain.
 *
 * @example Get keys of a plain object
 * ```typescript
 * getKeys({}); // Yields nothing
 * getKeys({ coven: "engineering" }); // Yields "coven"
 * ```
 * @param object Object to get the keys from.
 * @yields Object keys.
 */
export const getKeys = (object: object): IterableIterator<string | symbol> =>
	unique(
		iteratorFunctionToIterableIterator(function* (): Generator<
			string | symbol
		> {
			yield* Reflect.ownKeys(object);

			hasPrototype(object)
				? yield* Reflect.ownKeys(object.prototype)
				: undefined;

			const constructor = object.constructor;

			(
					isObjectConstructor(constructor)
					|| isFunctionConstructor(constructor)
				)
				? undefined
				: yield* getKeys(constructor);
		}),
	);
