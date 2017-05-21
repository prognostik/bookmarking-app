function tagsService($http) {

	function getTags() {

		return $http({
			method: 'GET',
			url: '/tags'
		})
		.then(function(result) {
			return result.data;
		});
	}

	return {
		getTags: getTags
	}
}

module.exports = tagsService;
