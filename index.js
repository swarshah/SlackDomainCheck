var express = require('express');
var app = express();
var dns = require('dns');


app.get('/', function(request, response) {
  response.send('Hello there!');
});

app.get('/domain/:d', function (req, res) {
	var domain = req.params.d;
	dns.resolve4(domain, function (err, addresses) {
		if (err){
			res.send('This domain is availabel!');
		}
		else{
			res.send('This domain is not available!');
		}
	});
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log("Node app is running on port:" + app.get('port'))
})