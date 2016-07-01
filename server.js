 var express = require('express');
 var app = express();
 var port = process.env.PORT || 3000;
 
 app.use(express.static(__dirname + '/'));
 app.use(bodyParser.json());
 
 app.listen(port, function() {
 	console.log('Server Started at port ' + port);
 });