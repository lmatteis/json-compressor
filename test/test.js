var test = require("tap").test, fs = require("fs"), compress = require("../"), source = fs.readFileSync("../example/example.json", "utf8");

test("Simple Compression Test", function (test) {
  test.deepEqual(JSON.parse(compress(source)), {
    "name": "Kit",
    "age": 19,
    "hobbies": ["programming", "running"],
    "source": "123\\n// Line comment.\\n/* Block comment. */\\n456"
  });
  test.end();
});