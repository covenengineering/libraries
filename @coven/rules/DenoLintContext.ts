/**
 * Utility type to figure out what the Node type is based on the Visitor.
 */
export type DenoLintContext<
	Visitor extends keyof Deno.lint.LintVisitor,
	Node extends Deno.lint.Node = Deno.lint.Node,
> = Node extends { type: Visitor } ? Node : never;
