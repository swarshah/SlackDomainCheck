var express = require('express');
var dns = require('dns');
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.get('/', function(request, response) {
  response.send('Hello there!');
});

app.post('/', function(req, res) {
	//console.log(req.body);
	console.log(req.body.text);
	var domain = req.body.text;
	dns.resolve4(domain, function (err, addresses) {
		if (err){
			res.send('Looks like *'+domain+'* is availabel!');
		}
		else{
			res.send('Looks like *'+domain+'* is *not* availabel!');
		}
	});
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log("Node app is running on port:" + app.get('port'))
})