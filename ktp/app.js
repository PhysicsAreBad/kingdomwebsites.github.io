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
let $other = $('.other');
let $otherButton = $('#other-button')
let title = "web-title";

$pageList.hide();
$laws.hide();
$history.hide();
$bio.hide();
$other.hide();
console.log("Ready!");

$(document).ready(() => {

	$pageButton.on('click', () => {
		$pageList.fadeToggle();
	})
	$lawsButton.on('click', () => {
		$main.fadeOut();
		$history.fadeOut();
		$bio.fadeOut();
		$other.fadeOut();
		setTimeout(function(){$laws.fadeIn(); document.getElementById(title).innerHTML = "Laws - The Teachers Pet Kingdom";}, 405);
		console.log("Open Laws page");
	})
	$historyButton.on('click', () => {
		$main.fadeOut();
		$laws.fadeOut();
		$bio.fadeOut();
		$other.fadeOut();
		setTimeout(function(){$history.fadeIn(); document.getElementById(title).innerHTML = "History - The Teachers Pet Kingdom";}, 405);
		console.log("Open History page");
	})
	$bioButton.on('click', () => {
		$main.fadeOut();
		$history.fadeOut();
		$laws.fadeOut();
		$other.fadeOut();
		setTimeout(function(){$bio.fadeIn(); document.getElementById(title).innerHTML = "Princess Kaiya - The Teachers Pet Kingdom";}, 405);
		console.log("Open Bio page");
	})
	$otherButton.on('click', () => {
		$main.fadeOut();
		$history.fadeOut();
		$bio.fadeOut();
		$laws.fadeOut();
		setTimeout(function(){$other.fadeIn(); document.getElementById(title).innerHTML = "Other Information - The Teachers Pet Kingdom";}, 405);
		console.log("Open Other Info page");
	})
	$mainButton.on('click', () => {
		$laws.fadeOut();
		$history.fadeOut();
		$bio.fadeOut();
		$other.fadeOut();
		setTimeout(function(){$main.fadeIn(); document.getElementById(title).innerHTML = "The Teachers Pet Kingdom";}, 405);
		console.log("Back to main page");
	})
})