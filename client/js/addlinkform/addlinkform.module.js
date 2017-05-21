var addlinkformDirective = require('./addlinkform/addlinkform.directive');


var addlinkform = angular.module('addlinkform', []);


addlinkform.directive('addlinkform', addlinkformDirective);



module.exports = addlinkform;

