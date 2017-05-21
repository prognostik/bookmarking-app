function linksService($http) {

	function getLinks(tag) {
		if (!tag) {
			throw new Error('No tag specified');
		}


		return $http({
			method: 'GET',
			url: '/links?tag=' + tag
		});
	}

	return {
		getLinks: getLinks
	}
}

module.exports = linksService;
