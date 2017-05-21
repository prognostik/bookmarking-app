require('../links/links.module');


var taglinksDirective = require('./taglinks/taglinks.directive');
var taglinksService = require('./taglinks.service');


var taglinks = angular.module('taglinks', ['links']);



taglinks.directive('taglinks', taglinksDirective);
taglinks.factory('taglinksService', taglinksService);



module.exports = taglinks;

