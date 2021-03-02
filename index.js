var express = require("express");
var app = express();

function receive(request, response) {
	console.log("WOAHA");

}

app.get("/", receive);

function debug() {
	console.log("Debug?");
}

setInterval(debug, 1000);