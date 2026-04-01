import { assertEquals } from "@std/assert";
import { reduce } from "../reduce.ts";

const add = (augend: number) => (addend: number) => addend + augend;
const sum = reduce(add);
const sumFrom0 = sum(0);

Deno.test(
	"an array of numbers and a sum reducer returns the total sum",
	async () => assertEquals(await sumFrom0([1, 2, 3]), 6),
);
