require('../link/link.module');
require('../tag/tag.module');

var lastlinkDirective = require('./lastlink/lastlink.directive');
var lastlinkService = require('./lastlink.service');


var lastlink = angular.module('lastlink', ['link']);


lastlink.directive('lastlink', lastlinkDirective);
lastlink.factory('lastlinkService', lastlinkService);



module.exports = lastlink;

