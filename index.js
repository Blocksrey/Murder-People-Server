var express = require("express");
var app = express();

app.get("/asd", function(request, response) {
	response.writeHead(200, {"Content-Type": "application/json"});
    response.send(JSON.stringify({message: 'Got the email'}));
});

function debug() {
	console.log("Debug?");
}

setInterval(debug, 1000);