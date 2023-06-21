const fs = require("fs");
const shell = require("shelljs");
const path = "failed.txt";

if (fs.existsSync(path)) {
  const content = fs.readFileSync(path, "utf8").trim();
  const uniqueValues = [...new Set(content.split("\n"))];
  const grepValue = `/(${uniqueValues.join("|")})/`;

  shell.echo(grepValue);
} else {
  console.log(`'${path}' does not exist.`);
}