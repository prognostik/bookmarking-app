require('./addlinkform.css');

var templateUrl = require('./addlinkform.html');


function addlinkformDirective() {

	return {

		restrict: 'E',

		templateUrl: templateUrl,

		scope: {
			url: '<',
			title: '<',
			tag: '<',
			isEditLink: '<',
			save: '&',
			cancel: '&',
			delete: '&'
		},

		controllerAs: 'vm',

		bindToController: true,

		controller: function() {
			var ctrl = this;

			ctrl.onSave = function() {
				var link = ctrl.formOutput();

				ctrl.save(link);

				if (!ctrl.isEditLink) {
					ctrl.cleanForm();
				}
			}

			ctrl.onCancel = function() {
				ctrl.cancel();
			}

			ctrl.onDelete = function() {
				ctrl.delete();
			}

			ctrl.cleanForm = function() {
				ctrl.url = '';
				ctrl.title = '';
				ctrl.tag = '';
			}


			/**
			 * Clean and format data from the form
			 * @return {Object}
			 */

			ctrl.formOutput = function() {
				var url = ctrl.url || '',
					title = ctrl.title || '',
					tag = ctrl.tag || '';

				url = url.trim();

				if (!url) {
					return;
				}

				title = title.trim();
				tag = tag.trim();

				title = title !== '' ? title : url;
				tag = tag !== '' ? tag : 'untagged';

				return {
					url: url,
					title: title,
					tag: tag
				};
			}
		}

	}
}

module.exports = addlinkformDirective;
