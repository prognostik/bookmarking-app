var express = require('express'),
	MongoClient = require('mongodb').MongoClient;

var	router = express.Router(),
	dbUrl = 'mongodb://localhost:27017/test';


/**
 * Get last saved link
 */


router.get('/', function(req, res) {
	getLastLink(req, res);
});



function getLastLink(req, res) {

	MongoClient.connect(dbUrl, function(err, db) {
		if (err) { console.log(err); }

		db.collection('links')
			.find({}, { url: 1, title: 1, tag: 1, _id: 0 }, {limit: 1, sort: [['date', 'desc']]})
			.toArray(function(err, result) {
				if (err) { console.log(err); }

				res.send(result);

				db.close();
			});
	});
}





module.exports = router;




