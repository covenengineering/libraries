import { format } from "prettier";
import prettierConfig from "../prettier.config.mjs";

const extensions = [".js", ".json", ".md", ".ts"];
const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder();

const getFiles = async function* (
	directory = ".",
): AsyncGenerator<[path: string, content: string]> {
	for await (const entry of Deno.readDir(directory)) {
		if (!entry.name.startsWith(".")) {
			const path = `${directory}/${entry.name}`;

			entry.isDirectory ? yield* getFiles(path)
			: extensions.some(extension => entry.name.endsWith(extension)) ?
				yield await Deno.readFile(path).then(content => [
					path,
					decoder.decode(content),
				])
			:	undefined;
		}
	}
};

Array.fromAsync(getFiles()).then(files =>
	files.forEach(([filepath, code]) =>
		format(code, { filepath, ...prettierConfig }).then(formattedCode =>
			Deno.writeFile(filepath, encoder.encode(formattedCode)),
		),
	),
);
