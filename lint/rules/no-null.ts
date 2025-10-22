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

export const noNull: Deno.lint.Rule = {
	create: (context): Deno.lint.LintVisitor => ({
		Literal: (node): void =>
			(node.raw === "null" && !isObjectCreate(node.parent))
				? context.report({
					node,
					message: "Use `undefined` instead of `null`.",
				})
				: undefined,
	}),
};
