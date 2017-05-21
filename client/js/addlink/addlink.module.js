require('../addlinkform/addlinkform.module');

var addlinkDirective = require('./addlink/addlink.directive');
var addlinkService = require('./addlink.service');


var addlink = angular.module('addlink', ['addlinkform', 'ngAnimate']);


addlink.directive('addlink', addlinkDirective);
addlink.factory('addlinkService', addlinkService);



module.exports = addlink;

