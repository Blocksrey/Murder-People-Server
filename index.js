var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var playerTimes = {};

function receive(request, response) {
	
	response.setHeader("Content-Type", "application/json");

	response.send(JSON.stringify("WTF"));
}

app.get("/", receive);
app.listen(port);

console.log("Hosted on port: " + port);





function update() {

}

setInterval(update, 1000);