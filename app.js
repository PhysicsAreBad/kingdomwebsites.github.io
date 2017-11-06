$(document).ready(() => {
	let $kingdomList = $('#kingdom-list');
	let $kingdomListHead = $('#kingdom-list-header');
	let $copyright = $('#copyright');
	$kingdomList.hide();
	$kingdomListHead.on('click', () => {
		$kingdomList.fadeToggle();
	})
	$copyright.on('click', () => {
		alert("Hi");
	})
})
