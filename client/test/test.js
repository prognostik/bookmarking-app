/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var compile,
	scope,
	directive,
	directiveElement = '<app-header></app-header>';


function getCompiledDirective(directiveElement) {
	var directiveElement = directiveElement || '',
		element = angular.element(directiveElement),
  		compiledDirective = compile(element)(scope);

  	scope.$digest();

  	return compiledDirective;
}


describe('header', function() {

	beforeEach(function() {
		// karme gives an error: 'module is not a function'
		angular.mock.module('header');

		inject(function($compile, $rootScope) {
		    compile = $compile;
		    scope = $rootScope.$new();
		});

	  	directive = getCompiledDirective(directiveElement);
	});



	it('should compile the template', function() {
		var directiveContents = directive.html();

		expect(directiveContents).not.toEqual('');
	});

})



/***/ }),
/* 1 */
/***/ (function(module, exports) {

var compile,
	scope,
	directive,
	directiveElement = '<tag></tag>';


function getCompiledDirective(directiveElement) {
	var directiveElement = directiveElement || '',
		element = angular.element(directiveElement),
  		compiledDirective = compile(element)(scope);

  	scope.$digest();

  	return compiledDirective;
}


describe('tag', function() {

	beforeEach(function() {
		angular.mock.module('tag')

		inject(function($compile, $rootScope) {
		    compile = $compile;
		    scope = $rootScope.$new();
		});

	  	directive = getCompiledDirective(directiveElement);
	});



	it('should compile the template', function() {
		var directiveContents = directive.html();

		expect(directiveContents).not.toEqual('');
	});


	it('should insert the tag', function() {
		var tag = 'testcontents',
			directiveElement = '<tag tag="'+ tag +'"></tag>',
			directive = getCompiledDirective(directiveElement),
			directiveContents = directive.html();

		expect(directiveContents).toContain(tag);
	});

})



/***/ }),
/* 2 */
/***/ (function(module, exports) {

var compile,
	scope,
	directive,
	directiveElement = '<tags></tags>',
	$httpBackend,
	tagsService,
	$q,
	TAGS = ['tag1', 'tag2'];


function getCompiledDirective(directiveElement) {
	var directiveElement = directiveElement || '',
		element = angular.element(directiveElement),
  		compiledDirective = compile(element)(scope);

  	scope.$digest();

  	return compiledDirective;
}




describe('tags', function() {


	beforeEach(function() {
		angular.mock.module('tags')

		inject(function($compile, $rootScope, _$httpBackend_, _tagsService_, _$q_) {
		    compile = $compile;
		    scope = $rootScope.$new();
		    $httpBackend = _$httpBackend_;
		    tagsService = _tagsService_;
		    $q = _$q_;
		});

		tagsService.getTags = jasmine
			.createSpy("getTags() spy")
			.and.callFake(function() {
				return $q.when(TAGS);
			});

	  	directive = getCompiledDirective(directiveElement);
	});




	it('should have a service', function() {
		expect(tagsService).toBeDefined();
	});


	it('should compile the template', function() {
		var directiveContents = directive.html();

		expect(directiveContents).not.toEqual('');
	});


	it('should pass through the tag values', function() {
		var directiveContents = directive.html();

		expect(directiveContents).toContain('tag1');
	});
})

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(2);




/***/ })
/******/ ]);