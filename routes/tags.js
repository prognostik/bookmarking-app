var express = require('express'),
	MongoClient = require('mongodb').MongoClient;

var	router = express.Router(),
	dbUrl = 'mongodb://localhost:27017/test';




router.get('/', function(req, res) {

	getTags(req, res);

});



function getTags(req, res) {
	var arr;

	MongoClient.connect(dbUrl, function(err, db) {
		if (err) { console.log(err); }

		db.collection('links')
			.find({}, { tag: 1, _id: 0 })
			.toArray(function(err, result) {
				if (err) {
					console.log(err);
				}

				arr = extractTags(result);
				arr = clean(arr);
				arr = arr.sort();

				res.send(arr);

				db.close();
			});
	});
}

function extractTags(arr) {
	var tags = [],
		tag;

	arr.forEach(function(item) {
		tag = item.tag;

		tags.push(tag);
	});

	return tags;
}


function clean(arr) {
	var result = [];

	arr.forEach(function(item) {
		if (result.indexOf(item) < 0 && item !== 'untagged') {
			result.push(item);
		}
	});

	return result;
}




module.exports = router;




