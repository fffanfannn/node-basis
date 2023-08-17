import { readFile, writeFile } from "fs/promises";

let template = await readFile("template.html", "utf-8");

const replacements = {
  ttttitle: process.argv[3] ||"my first page",
  content: process.argv[4] ||"my first content"
};

for (let key in replacements) {
  template = template.replace(`{${key}}`, replacements[key]);
}

console.log(template);

await writeFile(`./static/${process.argv[2] || "default"}.html`, template);
