import { no } from "../no.ts";

/**
 * Checks for `Object.create`.
 */
const isObjectCreate = (
	node: Deno.lint.Node,
): node is Deno.lint.CallExpression =>
	node.type === "CallExpression"
	&& node.callee.type === "MemberExpression"
	&& node.callee.object.type === "Identifier"
	&& node.callee.object.name === "Object"
	&& node.callee.property.type === "Identifier"
	&& node.callee.property.name === "create";

export const noNull: Deno.lint.Rule = no(
	"Literal",
	"Avoid using `null`. Use `undefined` instead.",
	({ node }) => node.raw === "null" && !isObjectCreate(node.parent),
);
