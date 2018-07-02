const path = require('path');
const http = require('http');
const express = require('express');

var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname));

app.get('/', function(req, res) {
	res.render('index.html');
});

server.listen(8080, () => {
   console.log('Server Started on port 8080');
});