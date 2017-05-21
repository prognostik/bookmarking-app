require('./lastlink.css');

var templateUrl = require('./lastlink.html');


function lastlinkDirective() {

	return {

		restrict: 'E',

		templateUrl: templateUrl,

		controllerAs: 'vm',

		bindToController: true,

		controller: function($rootScope, lastlinkService, $timeout) {
			var ctrl = this;

			ctrl.link = {
				url: '',
				title: '',
				tag: ''
			};

			ctrl.hide = false;

			ctrl.onClick = function() {
				ctrl.hide = true;
			}

			lastlinkService
				.getLastLink()
				.then(function(result) {
					var link = result.data[0];

					ctrl.link = {
						url: link.url,
						title: link.title,
						tag: link.tag
					};
				});


			$rootScope.$on('addnewlink', function(event, data) {
				ctrl.animateShowNewLink(data);
			});

			ctrl.animateShowNewLink = function(data) {
				ctrl.hide = true;

				$timeout(function() {
					ctrl.link = data;

					ctrl.hide = false;
				}, 1000);
			}
		}
	}
}

module.exports = lastlinkDirective;
