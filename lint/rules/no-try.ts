export const noTry: Deno.lint.Rule = {
	create: (context): Deno.lint.LintVisitor => ({
		TryStatement: (node): void =>
			context.report({
				node,
				message:
					"Avoid `try`/`catch`. Use `attempt` from `@coven/parsers`, or a Promise.",
			}),
	}),
};
