var express = require("express");
var app = express();

/*
function receive(request, response) {
	console.log("WOAHA");

}

app.get("/", receive);
*/


app.get("/", function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send('<!DOCTYPE html><head><meta charset="UTF-8"><meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript"></head><body>Welcome to NodeJS App on Heroku</body></html>');
});

app.listen(8080);


function debug() {
	console.log("Debug?");
}

setInterval(debug, 1000);