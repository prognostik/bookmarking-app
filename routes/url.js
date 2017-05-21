var express = require('express'),
	MongoClient = require('mongodb').MongoClient,
	ObjectID = require('mongodb').ObjectID;

var	router = express.Router(),
	dbUrl = 'mongodb://localhost:27017/test';


/**
 * Save link
 */


router.post('/', function(req, res) {
	saveLink(req, res);
});

router.delete('/', function(req, res) {
	deleteLink(req, res);
});

router.put('/', function(req, res) {
	editLink(req, res);
});



function saveLink(req, res) {
	var url = req.body.url,
		title = req.body.title,
		tag = req.body.tag,
		date = req.body.date;

	MongoClient.connect(dbUrl, function(err, db) {
		if (err) { console.log(err); }

		db.collection('links')
			.insertOne(
				{ url: url, title: title, tag: tag, date: date },
				function(err, result) {
					if (err) { console.log(err); }

					res.send(result);
					db.close();
			});
	});
}

function deleteLink(req, res) {
	var id = new ObjectID(req.query.id);

	MongoClient.connect(dbUrl, function(err, db) {
		if (err) { console.log(err); }

		db.collection('links')
			.deleteOne(
				{ _id: id },
				function(err, result) {
					if (err) { console.log(err); }

					res.send(result);
					db.close();
			});
	});
}

function editLink(req, res) {
	var id = new ObjectID(req.body._id),
		url = req.body.url,
		title = req.body.title,
		tag = req.body.tag;

	MongoClient.connect(dbUrl, function(err, db) {
		if (err) { console.log(err); }

		db.collection('links')
			.updateOne(
				{ _id: id },
				{ $set: { url: url, title: title, tag: tag }},
				function(err, result) {
					if (err) { console.log(err); }

					res.send(result);
					db.close();
			});
	});
}


module.exports = router;




