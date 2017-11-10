let $pageButton = $('#page-list-button');
let $pageList = $('#page-list');
let $main = $('.main');
let $mainButton = $('#main-button');
let $history = $('.history');
let $historyButton = $('#history-button');
let $laws = $('.laws');
let $lawsButton = $('#laws-button');
let $title = $('#web-title');

$pageList.hide();
$history.hide();
$laws.hide();
console.log("Ready");

$(document).ready(() => {

	$pageButton.on('click', () => {
		$pageList.fadeToggle();
	})
	$mainButton.on('click', () => {
		$history.fadeOut();
		$laws.fadeOut();
		setTimeout(function(){$main.fadeIn(); document.getElementById(title).innerHTML = "The Book Kingdom";}, 402);
		console.log("Main page refreshed");
	})
	$historyButton.on('click', () => {
		$main.fadeOut();
		$laws.fadeOut();
		setTimeout(function(){$history.fadeIn(); document.getElementById(title).innerHTML = "History - The Book Kingdom";}, 402);
		console.log("History page opened");
	})
	$lawsButton.on('click', () => {
		$history.fadeOut();
		$main.fadeOut();
		setTimeout(function(){$laws.fadeIn(); document.getElementById(title).innerHTML = "Laws - The Book Kingdom";}, 402);
		console.log("Laws page opened");
	})
})