const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', apiRouter);

apiRouter.post('/jskill', function(req, res) {
  const responseBody = {
		"version": "2.0",
		"template": {
			"outputs": [
				{
					"simpleText": {
						"text": "hello I'm jasmine :)"
					}
				}
			]
		}
	};

	res.status(200).send(responseBody);
});


app.listen(8080, function() {
	console.log('리쓴 8080! :D');
});