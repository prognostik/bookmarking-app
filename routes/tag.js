var express = require('express'),
	MongoClient = require('mongodb').MongoClient;

var	router = express.Router(),
	dbUrl = 'mongodb://localhost:27017/test';


/**
 * Delete all links with specific tag
 */


router.delete('/', function(req, res) {
	deleteLinks(req, res);
});

router.put('/', function(req, res) {
	editTag(req, res);
});


function deleteLinks(req, res) {
	var tag = req.query.tag;

	MongoClient.connect(dbUrl, function(err, db) {
		if (err) { console.log(err); }

		db.collection('links')
			.deleteMany(
				{ tag: tag },
				function(err, result) {
					if (err) { console.log(err); }

					res.send(result);
					db.close();
			});
	});
}

function editTag(req, res) {
	var oldTag = req.body.oldtag,
		newTag = req.body.newtag;

	MongoClient.connect(dbUrl, function(err, db) {
		if (err) { console.log(err); }

		db.collection('links')
			.updateMany(
				{ tag: oldTag },
				{ $set: { tag: newTag }},
				function(err, result) {
					if (err) { console.log(err); }

					res.send(result);
					db.close();
			});
	});
}


module.exports = router;




