 var express = require('express');
 var bodyParser = require('body-parser');

 var app = express();
 var port = process.env.PORT || 3000;
 
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


 app.listen(port, function() {
 	console.log('Server Started at port ' + port);
 });