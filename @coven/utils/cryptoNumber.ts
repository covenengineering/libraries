import { memo } from "@coven/memo";
import type { Stringable, Unary } from "@coven/types";

const textEncoder = new TextEncoder();
const LITTLE_ENDIAN = true;
const sha256ToNumber = (sha256: ArrayBuffer) =>
	new DataView(sha256).getUint32(0, LITTLE_ENDIAN) / 0xff_ff_ff_ff;

/**
 * Generates `number` using `SubtleCrypto#digest` and the given seed.
 *
 * > [!IMPORTANT]
 * > This only works in secure contexts.
 *
 * @example
 * ```typescript
 * const seededRandom1 = await cryptoNumber("some seed");
 * const seededRandom2 = await cryptoNumber("some seed");
 *
 * seededRandom1 === seededRandom2; // true because it has the same seed
 * ```
 * @see [SubtleCrypto#digest](https://mdn.io/SubtleCrypto.digest)
 * @param seed Seed to be used to generate random numbers.
 * @returns Pseudo-random number from seed.
 */
export const cryptoNumber: Unary<[seed: Stringable], Promise<number>> = memo(
	seed =>
		crypto.subtle
			.digest("SHA-256", textEncoder.encode(`${seed}`))
			.then(sha256ToNumber),
);
