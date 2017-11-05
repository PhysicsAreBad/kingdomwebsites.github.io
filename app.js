$(document).ready(() => {
	let $kingdomList = $('#kingdom-list');
	let $kingdomListHead = $('#kingdom-list-header');
	$kingdomList.hide();
	$kingdomListHead.on('click', () => {
		$kingdomList.slideToggle();
	})
})