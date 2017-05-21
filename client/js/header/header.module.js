var headerDirective = require('./header/header.directive');


var header = angular.module('header', []);



header.directive('appHeader', headerDirective);


module.exports = header;

