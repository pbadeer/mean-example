var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile( path.join(__dirname, 'index.html') );
}).get('/js/angular.min.js', function (req, res) {
  res.sendFile( path.join(__dirname, 'node_modules/angular/angular.min.js') );
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});