function linkService($http) {

	function deleteLink(id) {
		if (!id) {
			throw new Error('Can\'t delete link. Id not passed');
		}

		return $http({
			method: 'DELETE',
			url: '/url?id=' + id
		});
	}

	function updateLink(data) {
		if (!data._id) {
			throw new Error('Can\'t update link. Id not passed');
		}

		data.url = data.url.trim();
		data.title = data.title.trim();
		data.tag = data.tag.trim();

		data.title = data.title && data.title !== '' ? data.title : data.url;
		data.tag = data.tag && data.tag !== '' ? data.tag : 'untagged';

		return $http({
			method: 'PUT',
			url: '/url',
			data: data
		});
	}

	return {
		deleteLink: deleteLink,
		updateLink: updateLink
	}
}

module.exports = linkService;
