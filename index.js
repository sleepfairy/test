var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello World');
});

app.post('/', function(req, res) {
	res.setHeader('content-type', 'application/json');

	return res.send({version: '2.0', template: {outputs: [{simpleText: {text: 'hello world'}}]}});
});

app.listen(8080, function() {
	console.log('listening on port 8080');
});
