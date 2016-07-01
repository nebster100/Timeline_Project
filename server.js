var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./js/dataBase.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());

app.get('/timeline', function (req,res){
	db.timelineObject.findAll().then(function (tlObjects){
		var uniqueTLObjects = [];
		tlObjects.forEach(function (tlObject) {
			if(isUnique(tlObject, uniqueTLObjects)){
				uniqueTLObjects.push(tlObject);
			}
		});
		res.status(200).json(uniqueTLObjects);
	}, function (e){
		res.status(400).json(e);
	});
});

function isUnique(tlObj, tlArr){
	var unique = true;
	tlArr.forEach(function (tlTest){
		if(tlTest.timelineName === tlObj.timelineName){
			unique =  false;
		}
	});
	return unique;
}

app.get('/timeline/:name', function(req, res) {
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
	var body = _.pick(req.body, 'timelineName', 'year', 'description', 'link', 'img');
	
	db.timelineObject.create(body).then(function (tlObject){
		res.json(tlObject.toJSON());
	}, function (e){
		res.status(400).json(e);
	},
	function() {
		res.status(500).send();
	});
});

db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log('Express listening on port ' + PORT + '!');
	});
});