 document.addEventListener('DOMContentLoaded', function() {

	chrome.tabs.executeScript( null, {function start_scroll_down() {

		scroll = setInterval(function(){ window.scrollBy(0, 1000); console.log('start');}, 2000);

	}	});

});