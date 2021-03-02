var express = require("express");
var app = express();

/*
function receive(request, response) {
	console.log("WOAHA");

}

app.get("/", receive);
*/

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);

function debug() {
	console.log("Debug?");
}

setInterval(debug, 1000);