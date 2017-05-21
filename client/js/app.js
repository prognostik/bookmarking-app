require('../css/app.css');
require('../css/animateshow.css');

require('./header/header.module');
require('./addlink/addlink.module');
require('./lastlink/lastlink.module');
require('./untagged/untagged.module');


require('./tags/tags.module');
require('./taglinks/taglinks.module');


var templateUrlIndex = require('../templates/index.html');
var templateUrlTag = require('../templates/tag.html');


angular.module('app', [
	'ngRoute',
	'ngSanitize',
	'ngAnimate',

	'header',
	'addlink',
	'lastlink',
	'untagged',
	'tags',
	'taglinks'
]);


angular.module('app')
	.config(function($routeProvider, $locationProvider) {

		$routeProvider
			.when('/', {
				templateUrl: templateUrlIndex
			})
			.when('/tag/:tag', {
				templateUrl: templateUrlTag
			})
			.otherwise({
				redirectTo: '/'
			});



	$locationProvider.html5Mode(true);
});




