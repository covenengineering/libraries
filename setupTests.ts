// deno-coverage-ignore-file
import { Window } from "happy-dom";

const {
	Element, // Required by Vue
	Node, // Required by Vue
	SVGElement, // Required by Vue
	document,
	window,
} = new Window();

Object.assign(globalThis, { Element, Node, SVGElement, document, window });
