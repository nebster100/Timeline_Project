 var express = require('express');
 var app = express();
 var port = process.env.PORT || 3000;
 
 app.get('/about', function (req, res){
 	res.send('About us');
 });
 
 app.use(express.static(__dirname + '/'));
 
 app.listen(port, function() {
 	console.log('Server Started at port ' + port);
 });