var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./js/dataBase.js');

var app = express();
var PORT = process.env.PORT || 3000; 

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());

db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log('Express listening on port ' + PORT + '!');
	});
});