let $pageButton = $('#page-list-button');
let $pageList = $('#page-list');
let $main = $('.main');
let $history = $('.history');
let $bio = $('.bio');
let $laws = $('.laws');
let $cbLink = $('#cb-link');
let $historyLink = $('#history-link');
let $lawsLink = $('#laws-link');
let $mainLink = $('#main-link')

$history.hide();	
$bio.hide();
$laws.hide();
$pageList.hide();
console.log("Ready");

$(document).ready(() => {
	$pageButton.on('click', () => {
		$pageList.fadeToggle();
		console.log("Open page switcher");
	})
	$lawsLink.on('click', () => {
		$pageList.hide();
		$main.fadeOut();
		$bio.fadeOut();
		$history.fadeOut();
		setTimeout(function(){$laws.fadeIn();}, 402);
		console.log("Open laws page")
	})
	$mainLink.on('click', () => {
		$pageList.hide();
		$bio.fadeOut();
		$history.fadeOut();
		$laws.fadeOut();
		setTimeout(function(){$main.fadeIn();}, 402);
		console.log("Open main page");
	})
	$historyLink.on('click', () => {
		$pageList.hide();
		$main.fadeOut();
		$bio.fadeOut();
		$laws.fadeOut();
		setTimeout(function(){$history.fadeIn();}, 402);
		console.log("Open history page");
	})
	$cbLink.on('click', () => {
		$pageList.hide();
		$main.fadeOut();
		$history.fadeOut();
		$laws.fadeOut();
		setTimeout(function(){$bio.fadeIn();}, 402);
		console.log("Open charicter bio");
	})

})
