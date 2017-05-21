require('./header.css');

var templateUrl = require('./header.html');


function headerDirective() {
	return {
		restrict: 'E',

		templateUrl: templateUrl
	}
}

module.exports = headerDirective;
