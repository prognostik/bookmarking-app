function addlinkService($http) {

	function saveLink(url, title, tag) {
		var date = new Date().getTime();

		var data = {
			title: title,
			url: url,
			tag: tag,
			date: date
		};

		return $http({
			method: 'POST',
			url: '/url',
			data: data
		});
	}

	return {
		saveLink: saveLink
	}
}

module.exports = addlinkService;
