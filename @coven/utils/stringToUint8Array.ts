/**
 * Text encoder do be used by {@linkcode seededRandom}.
 */
const textEncoder = new TextEncoder();

/**
 * Turns a string into a `Uint8Array` (alias for
 * {@linkcode https://coven.to/mdn/TextEncoder/encode TextEncoder#encode}).
 *
 * @param string String to be encoded.
 * @returns Uint8Array with the encoded string (UTF-8).
 */
export const stringToUint8Array = (string?: string): Uint8Array<ArrayBuffer> =>
	textEncoder.encode(string);
