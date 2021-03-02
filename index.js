var http = require("http");

function receive(request, res) {
	console.log("ASDasd");

	res.writeHead(200, {"Content-Type": "application/json"});
	res.write("ASD");
	res.end();
}

http.createServer(receive).listen(8080);