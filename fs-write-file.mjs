import { readFile, writeFile } from "fs/promises";

let template = await readFile("template.html", "utf-8");

const replacements = {
  ttttitle: "my first ttttttttitle",
  content: "my first content",
};

for (let key in replacements) {
  template = template.replace(`{${key}}`, replacements[key]);
}

console.log(template);

await writeFile("./static/index.html", template);
