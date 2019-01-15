var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send("it's test for jasmine:)\n어떻게 하는거야 이거\n편집기만 쓰면 뭐해 엉엉");
});

app.post('/', function(req, res) {
	res.setHeader('content-type', 'application/json');

	return res.send({version: '2.0', template: {outputs: [{simpleText: {test: "it's just test for jasmine"}}]}});
	return res.send({version: '2.0', template: {outputs: [{simpleImage: {imageUrl: "https://media1.tenor.com/images/1fb8596521fc8a349d07d94db783c285/tenor.gif", altText: "jasmine.gif"}}]}});
});

app.listen(8080, function() {
	console.log('리쓴 8080! :D 스킬붙이는거 알려줘요 알파');
});

