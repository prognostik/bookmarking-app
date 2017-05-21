require('../tag/tag.module');

var tagsDirective = require('./tags/tags.directive');
var tagsService = require('./tags.service');


var tags = angular.module('tags', ['tag']);



tags.directive('tags', tagsDirective);
tags.factory('tagsService', tagsService);



module.exports = tags;

