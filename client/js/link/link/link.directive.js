require('./link.css');

var templateUrl = require('./link.html');


function linkDirective() {

	return {

		restrict: 'E',

		templateUrl: templateUrl,

		scope: {
			link: '<'
		},

		controllerAs: 'vm',

		bindToController: true,

		controller: function(linkService, $timeout) {
			var ctrl = this;

			ctrl.isShowLink = true;
			ctrl.isShowForm = false;
			ctrl.isShowLinkBlock = true;
			ctrl.isShowDate = false;

			ctrl.oldTag = '';
			ctrl.TIMEOUT = 700;

			// to pass into <addform> component
			// show Delete and Cancel buttons
			ctrl.isEditLink = true;


			ctrl.$postLink = function() {
				ctrl.setIsShowDate();
				ctrl.saveCurrentTag();
			}


			ctrl.save = function(url, title, tag) {
				var link = {
					url: url,
					title: title,
					tag: tag,
					_id: ctrl.link._id
				};

				linkService
					.updateLink(link)
					.then(function() {
						if (link.tag !== ctrl.oldTag) {
							ctrl.hideLinkBlock();
						} else {
							ctrl.updateLink(link);
							ctrl.hideForm();
						}
					});
			}

			ctrl.cancel = function() {
				ctrl.hideForm();
			}

			ctrl.delete = function() {
				var id = ctrl.link._id;

				linkService.deleteLink(id)
					.then(function() {
						ctrl.hideLinkBlock();
					});
			}

			ctrl.showForm = function() {
				ctrl.isShowLink = false;

				$timeout(function() {
					ctrl.isShowForm = true;
				}, ctrl.TIMEOUT);

			}

			ctrl.hideForm = function() {
				ctrl.isShowForm = false;

				$timeout(function() {
					ctrl.isShowLink = true;
				}, ctrl.TIMEOUT);
			}

			ctrl.updateLink = function(link) {
				ctrl.link.url = link.url;
				ctrl.link.title = link.title;
				ctrl.link.tag = link.tag;
			}

			ctrl.hideLinkBlock = function() {
				ctrl.isShowForm = false;

				$timeout(function() {
					ctrl.isShowLinkBlock = false;
				}, ctrl.TIMEOUT);
			}

			/**
			 * Show date of adding link for the untagged links
			 */

			ctrl.setIsShowDate = function() {
				ctrl.isShowDate = ctrl.link.tag === 'untagged';
			}

			/**
			 * Save current tag value
			 */

			ctrl.saveCurrentTag = function() {
				ctrl.oldTag = ctrl.link.tag;
			}
		}

	}

}

module.exports =  linkDirective;

