/**
 * Valid quantities for the quantity search.
 */
export type StringQuantity =
	| `${number}`
	| `${number}${number}`
	| `${number},${number}`
	| `${number},`;
