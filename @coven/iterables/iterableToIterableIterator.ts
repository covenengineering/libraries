export const iterableToIterableIterator = <Item>(
	iterable: Iterable<Item>,
): IterableIterator<Item> => {
	const iterator = iterable[Symbol.iterator];

	return {
		...iterator(),
		[Symbol.iterator]: () => iterableToIterableIterator(iterable),
	};
};
