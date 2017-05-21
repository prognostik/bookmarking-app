require('./taglinks.css');

var templateUrl = require('./taglinks.html');


function taglinksDirective() {

	return {

		restrict: 'E',

		templateUrl: templateUrl,

		controllerAs: 'vm',

		bindToController: true,

		controller: function($routeParams, taglinksService, $location, $timeout) {
			var ctrl = this;

			ctrl.tag = $routeParams.tag;
			ctrl.oldTag = ctrl.tag;
			ctrl.isShowTag = true;
			ctrl.isShowForm = false;
			ctrl.isShowControls = ctrl.tag !== 'untagged';
			ctrl.TIMEOUT = 700;


			ctrl.showEditForm = function() {
				ctrl.isShowTag = false;

				$timeout(function() {
					ctrl.isShowForm = true;
				}, ctrl.TIMEOUT);
			}

			ctrl.edit = function() {
				var data = {
					oldtag: ctrl.oldTag,
					newtag: ctrl.tag
					},

					isTagChanged = data.newtag !== data.oldtag;

				if (isTagChanged) {
					taglinksService.updateTag(data)
						.then(function() {
							ctrl.goToNewTag();
						});
				} else {
					ctrl.cancelUpdate();
				}
			}

			ctrl.cancelEdit = function() {
				ctrl.isShowForm = false;

				$timeout(function() {
					ctrl.isShowTag = true;
				}, ctrl.TIMEOUT);
			}

			ctrl.delete = function() {
				taglinksService.deleteTag(ctrl.tag)
					.then(function() {
						$location.url('/');
					});
			}

			/**
			 * Load new tag page if the tag was edited
			 */

			ctrl.goToNewTag = function() {
				var newTagUrl = '/tag/' + ctrl.tag;

				$location.url(newTagUrl);
			}
		}

	}
}

module.exports = taglinksDirective;
