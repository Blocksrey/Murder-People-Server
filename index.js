var express = require("express");
var app = express();

function receive(request, response) {
	response.setHeader("Content-Type", "application/json");
	res.send("THIS IS A RESPONSE!!!!!!!!!");
}

app.listen(process.env.PORT || 8080);

/*
function debug() {
	console.log("Debug?");
}

setInterval(debug, 1000);
*/