/**
 * Utility type to figure out what the Node type is based on the Visitor.
 */
type FindContext<
	Visitor extends keyof Deno.lint.LintVisitor,
	Node extends Deno.lint.Node = Deno.lint.Node,
> = Node extends { type: Visitor } ? Node : never;

/**
 * Shorthand for common "Avoid this, do that." lintinrg rules.
 */
export const no = <Visitor extends keyof Deno.lint.LintVisitor>(
	visitor: Visitor,
	message: string,
	condition?: (
		data: { context: Deno.lint.RuleContext; node: FindContext<Visitor> },
	) => boolean,
): Deno.lint.Rule => ({
	create: (context): Deno.lint.LintVisitor => ({
		[visitor]: (node: FindContext<Visitor>): void => {
			(condition?.({ context, node }) ?? true)
				? context.report({ message, node })
				: undefined;
		},
	}),
});
