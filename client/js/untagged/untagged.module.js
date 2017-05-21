var untaggedDirective = require('./untagged/untagged.directive');


var untagged = angular.module('untagged', []);



untagged.directive('untagged', untaggedDirective);


module.exports = untagged;

