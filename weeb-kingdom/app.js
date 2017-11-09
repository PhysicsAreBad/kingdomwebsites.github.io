        var $pageButton = $('#page-list-button');
	var $pageList = $('#page-list');
	var $main = $('.main');
	var $history = $('.history');
	var $bio = $('.bio');
	var $laws = $('.laws');
	var $cbLink = $('#cb-link');
	var $historyLink = $('#history-link');
	var $lawsLink = $('#laws-link');
	var $mainLink = $('#main-link')

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
		setTimeout(function(){$laws.fadeIn();}, 408);
		console.log("Open laws page")
	})
	$mainLink.on('click', () => {
		$pageList.hide();
		$bio.fadeOut();
		$history.fadeOut();
		$laws.fadeOut();
		setTimeout(function(){$main.fadeIn();}, 408);
		console.log("Open main page");
	})
	$historyLink.on('click', () => {
		$pageList.hide();
		$main.fadeOut();
		$bio.fadeOut();
		$laws.fadeOut();
		setTimeout(function(){$history.fadeIn();}, 408);
		console.log("Open history page");
	})
	$cbLink.on('click', () => {
		$pageList.hide();
		$main.fadeOut();
		$history.fadeOut();
		$laws.fadeOut();
		setTimeout(function(){$bio.fadeIn();}, 408);
		console.log("Open charicter bio");
	})

})
