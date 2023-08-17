// https://nodejs.org/api/fs.html#file-system

//ESM
import * as fs from "node:fs";

import { open } from "node:fs/promises";
import { readFile } from "fs/promises";

const file = await open("template.html");
// console.log(file)
// console.log(file.readLines());

// for await (const line of file.readLines()) {
//   console.log(line);
// }

const template1 = await readFile("./template.html")
console.log(template1)
const template2 = await readFile("./template.html", "utf-8");
console.log(template2);



