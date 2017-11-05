$(document).ready(() => {
	console.log("Ready");
	$('#price-table').hide();
	$('#toggle-button').on('click', () => {
		$('#price-table').fadeToggle();
		console.log("Toggle the Price Table");
	})
})