var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req, res) {
	res.send('<!DOCTYPE html><head></head><body>Welcome to NodeJS App on Heroku</body></html>');
});

//<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

app.listen(port);