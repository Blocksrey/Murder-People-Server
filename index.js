var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

function receive(request, response) {
	console.log(request);

	response.setHeader("Content-Type", "application/json");
	
	response.send("WTF");
}

app.get("/", receive);
app.listen(port);

console.log("Hosted on port: " + port);