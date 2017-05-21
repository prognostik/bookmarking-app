require('./tag.css');

var templateUrl = require('./tag.html');


function tagDirective() {

	return {
		templateUrl: templateUrl,

		restrict: 'E',

		scope: {
			tag: '@'
		},

		bindToController: true,

		controllerAs: 'vm',

		controller: function() {

		}
	}

}


module.exports = tagDirective;
