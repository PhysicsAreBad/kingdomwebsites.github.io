$(document).ready(() => {
	let $pageButton = $('#page-list-button');
	let $pageList = $('#page-list');

	$pageList.hide();

	$pageButton.on('click', () => {
		$pageList.fadeToggle();
	})
})