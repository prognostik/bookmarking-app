var tagDirective = require('./tag/tag.directive');


var tag = angular.module('tag', []);


tag.directive('tag', tagDirective);


module.exports = tag;

