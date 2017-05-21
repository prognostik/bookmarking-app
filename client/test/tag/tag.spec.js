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

