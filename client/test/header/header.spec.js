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

