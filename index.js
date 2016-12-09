var express = require('express');
var app = express();
var UserDb = require("./users.json");

app.get('/users/', function(req, res) {
	res.type('json').status(200).send(UserDb);	
});

app.get('/users/:id', function(req, res) { 
     var user = UserDb.filter(function(obj) { return obj.id == req.params.id})[0];
	 if (user != null)
	 {
		res.type('json').status(200).send(user);	
	 }
	 else
	 {
		 res.status(404).send("404: User not found");
	 }
});

app.use("*", function(req, res) { 
res.status(404).send("404: Resource not found");
})

app.listen(8081, function() {console.log("live on prt 8081")})

