/**
 * Gets all the `return`s in the given `block`.
 */
const getAllBlockReturns = (
	block: Deno.lint.BlockStatement,
): ReadonlyArray<Deno.lint.ReturnStatement> =>
	block.body
		?.flatMap((statement) =>
			"body" in statement && Array.isArray(statement.body) ?
				getAllBlockReturns(statement as Deno.lint.BlockStatement)
			:	statement,
		)
		.filter((statement) => statement.type === "ReturnStatement");

/**
 * Gets all the `return`s in the given `node`.
 */
const getAllFunctionReturns = (
	node: Extract<Deno.lint.Node, Record<"parent", unknown>>,
): ReadonlyArray<Deno.lint.ReturnStatement> =>
	"parent" in node && node.parent.type !== "TSParameterProperty" ?
		(
			(node.parent.type === "ArrowFunctionExpression"
				|| node.parent.type === "FunctionDeclaration"
				|| node.parent.type === "FunctionExpression")
			&& node.parent.body?.type === "BlockStatement"
		) ?
			getAllBlockReturns(node.parent.body)
		: "parent" in node.parent ? getAllFunctionReturns(node.parent)
		: []
	:	[];

/**
 * Rule to avoid early `return` statements.
 */
export const noEarlyReturn = {
	create: (context): Deno.lint.LintVisitor => ({
		ReturnStatement: (node): void =>
			(getAllFunctionReturns(node).at(-1) ?? node) === node ?
				undefined
			:	context.report({
					message:
						"Avoid early `return`. Use a single `return` instead.",
					node,
				}),
	}),
} as const satisfies Deno.lint.Rule;
