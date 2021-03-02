var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

function receive(request, response) {
	response.setHeader("Content-Type", "application/json");
	response.send("WTF");
}

app.get("/", receive);
app.listen(port);

console.log("Hosted on port: " + port);

/*
app.get("/", function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send('<!DOCTYPE html><head><meta charset="UTF-8"><meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript"></head><body>Welcome to NodeJS App on Heroku</body></html>');
});

app.listen(port);
*/

/*
function debug() {
	console.log("Debug?");
}

setInterval(debug, 1000);
*/