[![code style](https://img.shields.io/badge/code_style-classic-blue.svg)](http://diogoeichert.github.io/eslint-config-classic)
[![downloads](https://img.shields.io/npm/dt/tableparse.svg)](https://www.npmjs.com/package/tableparse)
[![license](https://img.shields.io/github/license/diogoeichert/tableparse.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/tableparse.svg)](https://www.npmjs.com/package/tableparse)

# tableparse
Parse tables as objects

# Usage
```
const fs = require("fs");
const tableparse = require("tableparse");

const readStream = fs.createReadStream("file.csv");

tableparse(readStream, ",", table => {
	console.log(table);
};
```
