function lastlinkService($http) {

	function getLastLink() {

		return $http({
			method: 'GET',
			url: '/lastlink'
		});
	}

	return {
		getLastLink: getLastLink
	}
}

module.exports = lastlinkService;
