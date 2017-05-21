require('../link/link.module');

var linksDirective = require('./links/links.directive');
var linksService = require('./links.service');


var links = angular.module('links', ['link']);


links.directive('links', linksDirective);
links.factory('linksService', linksService);


module.exports = links;

