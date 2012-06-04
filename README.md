# `json-compressor`

`json-compressor` is a simple Node module that removes whitespace and JavaScript-style comments from a JSON string.

    $ npm install json-compressor

## Example

    var fs = require("fs"), compress = require("../"), source = fs.readFileSync("example.json", "utf8");
    console.log(JSON.parse(compress(source)));
    => { "name": "Kit", "age": 19, "hobbies": ["programming", "running"], "source": "123\\n// Line comment.\\n/* Block comment. */\\n456" }

## License

Public domain.