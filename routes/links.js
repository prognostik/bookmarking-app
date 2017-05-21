var express = require('express'),
	MongoClient = require('mongodb').MongoClient;

var	router = express.Router(),
	dbUrl = 'mongodb://localhost:27017/test';




router.get('/', function(req, res) {

	getLinks(req, res);

});



function getLinks(req, res) {
	var tag = req.query.tag;

	MongoClient.connect(dbUrl, function(err, db) {
		if (err) { console.log(err); }

		db.collection('links')
			.find({ tag: tag}, { url: 1, title: 1, tag: 1, date: 1, _id: 1 })
			.toArray(function(err, result) {
				if (err) {
					console.log(err);
				}

				res.send(result);

				db.close();
			});
	});
}




module.exports = router;




