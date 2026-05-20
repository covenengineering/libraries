const getDenoJSON = function* (path = "."): Generator<string> {
	for (const dirEntry of Deno.readDirSync(path)) {
		const fullPath = `${path}/${dirEntry.name}`;
		if (dirEntry.isDirectory) {
			yield* getDenoJSON(fullPath);
		} else {
			if (dirEntry.isFile && dirEntry.name === "deno.json") {
				yield fullPath;
			}
		}
	}
};

const textDecoder = new TextDecoder("utf-8");
const textEncoder = new TextEncoder();
let newVersion: string | undefined;

for (const file of getDenoJSON()) {
	const content = textDecoder.decode(Deno.readFileSync(file));

	if (content.includes('"version": "')) {
		const [, version = "UNKNOWN"] =
			/"version": "(?<version>(?:\d+\.){2}\d+)"/.exec(content) ?? [];

		Deno.writeFileSync(
			file,
			textEncoder.encode(
				content.replace(
					`"${version}"`,
					`"${
						newVersion
						?? (newVersion =
							prompt("New version?", version) ?? version)
					}"`,
				),
			),
		);
	}
}
