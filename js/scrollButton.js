//document.getElementById('scroll_b').onclick = 
function ScrollScreen() {
    chrome.tabs.executeScript(tab.ib, {
		setInterval(function(){ window.scrollBy(0, 1000); console.log('start');}, 2000);
	});
}