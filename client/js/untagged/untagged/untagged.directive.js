require('./untagged.css');

var templateUrl = require('./untagged.html');


function untaggedDirective() {

	return {
		restrict: 'E',

		templateUrl: templateUrl,

		scope: {}
	}

}

module.exports = untaggedDirective;
