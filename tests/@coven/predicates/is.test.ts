import { is } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

const value = "foo";
const valueCopy = value;
const otherValue = "bar";

Deno.test("Equal values", () => assert(is(value)(valueCopy)));

Deno.test("Different dates", () => assertFalse(is(value)(otherValue)));

Deno.test("Equal objects", () => assertFalse(is({})({})));

Deno.test("Equal arrays", () => assertFalse(is([])([])));
