export const noClass: Deno.lint.Rule = {
	create: (context): Deno.lint.LintVisitor => ({
		ClassExpression: (node) => {
			context.report({
				node,
				message: "Avoid using `class`. Use a function instead.",
			});
		},
	}),
};
