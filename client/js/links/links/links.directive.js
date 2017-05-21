require('./links.css');

var templateUrl = require('./links.html');


function linksDirective() {

	return {

		restrict: 'E',

		templateUrl: templateUrl,

		scope: {
			tag: '@'
		},

		controllerAs: 'vm',

		bindToController: true,

		controller: function(linksService) {
			var ctrl = this;

			ctrl.$postLink = function() {
				ctrl.getLinks();
			}

			ctrl.getLinks = function() {
				linksService.getLinks(ctrl.tag)
					.then(function(result) {
						ctrl.links = result.data;
					});
			}

		}

	}

}

module.exports = linksDirective;
