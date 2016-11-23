var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

app.post('/survey-app/submit-survey', function (req, res) {
	var userData = req.body;
	Object.keys(userData).forEach(function(key){
		console.log(key + ": " + userData[key]);
	});
 	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'POST');
	res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
	res.send("success");
});

app.use('/survey-app', express.static(__dirname + '/app'));

var server = app.listen(process.env.PORT || 3000);

