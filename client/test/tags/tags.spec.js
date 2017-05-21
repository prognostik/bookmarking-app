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