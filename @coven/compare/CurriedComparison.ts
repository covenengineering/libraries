import type { Difference } from "./Difference.ts";

export type CurriedComparison<Right> = (right: Right) => Generator<Difference>;
