export const noThrow: Deno.lint.Rule = {
	create: (context): Deno.lint.LintVisitor => ({
		ThrowStatement: (node): void =>
			context.report({
				node,
				message: "Avoid using `throw`. Return the error instead.",
			}),
	}),
};
