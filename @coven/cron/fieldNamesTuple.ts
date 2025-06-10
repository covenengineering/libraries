import type { KeyOf } from "@coven/types";
import type { CronObject } from "./mod.ts";

/**
 * Field names in order.
 */
export const fieldNamesTuple: Readonly<
	["minute", "hour", "dayOfMonth", "month", "dayOfWeek"]
> = [
	"minute",
	"hour",
	"dayOfMonth",
	"month",
	"dayOfWeek",
] as const satisfies ReadonlyArray<KeyOf<CronObject>>;
