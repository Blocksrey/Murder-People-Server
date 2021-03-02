var http = require("http");

function receive(request, res) {
	res.writeHead(200, {"Content-Type": "application/json"});
	res.write("ASD");
	res.end();
}

http.createServer(receive).listen(8080);