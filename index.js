"use strict";

const readline = require("readline");

module.exports = (readStream = process.stdin, delimiter = ",", callback) => {
	const headers = [];
	
	const table = {
		columns: {},
		rows: []
	};
	
	const readLineInterface = readline.createInterface({
		input: readStream,
		output: process.stdout,
		terminal: false
	});
	
	readLineInterface.on("line", line => {
		const fields = line.split(delimiter);
	
		if (!headers.length) {
			headers.push(...fields);
	
			for (const header of headers) {
				table.columns[header] = [];
			}
	
			return;
		}
	
		const row = {};
	
		for (let i = 0; i < headers.length; ++i) {
			const column = headers[i];
			const value = fields[i];
			table.columns[column].push(value);
			row[column] = value;
		}
	
		table.rows.push(row);
	});
	
	readLineInterface.on("close", () => {
		callback(table);
	});	
};
