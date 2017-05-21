require('./addlink.css');

var templateUrl = require('./addlink.html');


function addlinkDirective() {

	return {
		restrict: 'E',

		templateUrl: templateUrl,

		scope: {},

		controllerAs: 'vm',

		bindToController: true,

		controller: function(addlinkService, $rootScope) {
			var ctrl = this;

			ctrl.isEditLink = false;

			ctrl.save = function(url, title, tag) {
				addlinkService
					.saveLink(url, title, tag)
					.then(function() {
						var link = {
							title: title,
							url: url,
							tag: tag
						};

						// show last link on page
						ctrl.updateLastlink(link);
					});
			}

			ctrl.updateLastlink = function(link) {
				$rootScope.$emit('addnewlink', link);
			}
		}
	}
}


module.exports = addlinkDirective;
