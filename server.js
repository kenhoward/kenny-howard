var express = require('express');

var app = express();

var port = 80;

// MIDDLEWARE ==================================

app.use(express.static(__dirname + '/public'));

// CONNECTIONS =================================

app.listen(port, function() {
	console.log('listening to port' + port)
})