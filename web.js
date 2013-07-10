var express = require('express');
var fs = require("fs");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  var buffer = new Buffer(256);
  buffer = fs.readfileSync('index.html','utf8');
  response.send(buffer.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
