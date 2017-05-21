require('./tags.css');

var templateUrl = require('./tags.html');


function tagsDirective() {

	return {
		restrict: 'E',

		templateUrl: templateUrl,

		scope: {},

		controllerAs: 'vm',

		bindToController: true,

		controller: function(tagsService, $rootScope, $timeout) {
			var ctrl = this;

			ctrl.tags = [];
			ctrl.isAddNewTag = false;
			ctrl.TIMEOUT = 1000;

			tagsService
				.getTags()
				.then(function(tags) {
					ctrl.tags = tags;
				});

			// when new link is added, update tags list too
			$rootScope.$on('addnewlink', function(event, data) {
				ctrl.addNewTag(data);
			});


			/**
			 * Add new tag in the list when the new link with the new tag is saved
			 * @param {Object} link
			 */

			ctrl.addNewTag = function(link) {
				var tag = link.tag;

				if (tag === '' || tag === 'untagged' || ctrl.tags.indexOf(tag) > 0) {
					return;
				}

				ctrl.animateAddNewTag(tag);
			}

			/**
			 * Hide and show the tags block to signal adding new tag item
			 */

			ctrl.animateAddNewTag = function(tag) {
				ctrl.isAddNewTag = true;

				$timeout(function() {
					ctrl.tags.push(tag);
					ctrl.tags = ctrl.tags.sort();

					ctrl.isAddNewTag = false;
				}, ctrl.TIMEOUT);
			}
		}
	}
}

module.exports = tagsDirective;
