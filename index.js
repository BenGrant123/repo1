var express = require('express');
var app = express();
//var bodyParser = require('body-parser'); 
//app.use(bodyParser.urlencoded({extended: true})); 
//app.use(bodyParser.json());

app.use('/app', express.static(__dirname + '/app'));

app.use('/api', function (req, res) {
	//var userData = req.body
	//console.log("userData is "+userData)
 	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,POST');
	res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With')
	res.send("success")
});

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

