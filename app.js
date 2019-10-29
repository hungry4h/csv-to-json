const CSVToJSON = require('csvtojson')
const JSONToCSV = require('json2csv')
const FileSystem = require('fs')

CSVToJSON().fromFile("./source.csv").then(source => {
	console.log(source)
});
