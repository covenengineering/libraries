import type { ReadonlyRecord } from "@coven/types";

/**
 * Dictionary of event name to event types.
 *
 * @example
 * ```typescript
 * const example = {
 * 	eventName: TypeOfEvent,
 * } satisfies EventTypeDictionary;
 * ```
 * @see [ReadonlyRecord](https://jsr.io/@coven/types@0.0.11/doc/~/ReadonlyRecord)
 */
export type EventTypeDictionary = ReadonlyRecord<string>;
