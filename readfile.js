var fs = require("fs");
var filePath = __dirname + "/README";
fs.readFile(filePath, "utf-8", function(err, data) {
	if (err)
		return console.log("Coould not read README file");
	console.log(data);
}