var fs = require("fs"), compress = require("../"), source = fs.readFileSync("example.json", "utf8");
console.log(JSON.parse(compress(source)));