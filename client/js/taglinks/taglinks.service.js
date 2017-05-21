function taglinksService($http) {

	function deleteTag(tag) {
		if (!tag) {
			throw new Error('Can\'t delete tag. Tag not passed');
		}

		return $http({
			method: 'DELETE',
			url: '/tag?tag=' + tag
		});
	}

	function updateTag(data) {
		if (!data.newtag || !data.oldtag) {
			throw new Error('Can\'t update tag. Tag not passed');
		}

		return $http({
			method: 'PUT',
			url: '/tag',
			data: data
		});
	}

	return {
		deleteTag: deleteTag,
		updateTag: updateTag
	}
}

module.exports = taglinksService;
