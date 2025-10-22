export const noThis: Deno.lint.Rule = {
	create: (context): Deno.lint.LintVisitor => ({
		ThisExpression: (node) => {
			context.report({
				node,
				message: "Avoid using `this`. Use predictable values instead.",
			});
		},
	}),
};
