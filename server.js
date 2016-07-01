var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./js/dataBase.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());

app.get('/timeline', function (req,res){
	res.status(500).send();
});

app.get('/timeline/:name', function(req, res) {
	console.log("hi");
	var where = {
		timelineName: req.params.name
	}

	db.timelineObject.findAll({
		where: where
	}).then(function (tlObjects){
		res.json(tlObjects);
	}, function(e){
		res.status(400).json(e);
	});
});

app.post('/timeline', function (req,res){
	var body = _.pick(req.body, 'timelineName', 'year', 'description', 'url', 'img');
	
	db.timelineObject.create(body).then(function (tlObject){
		res.json(tlObject.toJSON());
	}, function (e){
		res.status(400).json(e);
	},
	function() {
		res.status(500).send();
	});
});

db.sequelize.sync().then(function() {//Remember to remove force true
	app.listen(PORT, function() {
		console.log('Express listening on port ' + PORT + '!');
	});
});