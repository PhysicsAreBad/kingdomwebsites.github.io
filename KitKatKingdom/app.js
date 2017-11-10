let $pageButton = $('#page-list-button');
let $pageList = $('#page-list');
let	$main = $('.main');
let $mainButton = $('#main-button');
let $laws = $('.laws');
let $lawsButton = $('#laws-button');
let $history = $('.history');
let $historyButton = $('#history-button');
let $bio = $('.bio');
let $bioButton = $('#bio-button');
let title = "web-title";

$pageList.hide();
$laws.hide();
$history.hide();
$bio.hide();
console.log("Ready!");

$(document).ready(() => {

	$pageButton.on('click', () => {
		$pageList.fadeToggle();
	})
	$lawsButton.on('click', () => {
		$main.fadeOut();
		$history.fadeOut();
		$bio.fadeOut();
		setTimeout(function(){$laws.fadeIn(); document.getElementById(title).innerHTML = "Laws - The Kit Kat Kingdom";}, 405);
		console.log("Open Laws page");
	})
	$historyButton.on('click', () => {
		$main.fadeOut();
		$laws.fadeOut();
		$bio.fadeOut();
		setTimeout(function(){$history.fadeIn(); document.getElementById(title).innerHTML = "History - The Kit Kat Kingdom";}, 405);
		console.log("Open History page");
	})
	$bioButton.on('click', () => {
		$main.fadeOut();
		$history.fadeOut();
		$laws.fadeOut();
		setTimeout(function(){$bio.fadeIn(); document.getElementById(title).innerHTML = "Princess Andee - The Kit Kat Kingdom";}, 405);
		console.log("Open Bio page");
	})
	$mainButton.on('click', () => {
		$laws.fadeOut();
		$history.fadeOut();
		$bio.fadeOut();
		setTimeout(function(){$main.fadeIn(); document.getElementById(title).innerHTML = "The Kit Kat Kingdom";}, 405);
		console.log("Back to main page");
	})
})