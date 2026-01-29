import type { DenoLintContext } from "./DenoLintContext.ts";

/**
 * Shorthand for common "Avoid this, do that." lintinrg rules.
 */
export const no = <Visitor extends keyof Deno.lint.LintVisitor>(
	visitor: Visitor,
	message: string,
	condition?: (data: {
		context: Deno.lint.RuleContext;
		node: DenoLintContext<Visitor>;
	}) => boolean,
): Deno.lint.Rule => ({
	create: (context): Deno.lint.LintVisitor => ({
		[visitor]: (node: DenoLintContext<Visitor>): void => {
			(condition?.({ context, node }) ?? true) ?
				context.report({ message, node })
			:	undefined;
		},
	}),
});
