require('../addlinkform/addlinkform.module');

var linkDirective = require('./link/link.directive');
var linkService = require('./link.service');


var link = angular.module('link', ['addlinkform']);


link.directive('customlink', linkDirective);
link.factory('linkService', linkService);


module.exports = link;

