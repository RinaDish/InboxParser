document.getElementById('scroll_b').onclick = function ScrollPage() {
    //console.log('Work');
    //window.alert('1234');
    chrome.tabs.executeScript( null, setTimeout(function () {
        window.scrollTo(0, 10000);
    },2));
    //console.log('End of function');
}
/*
function scrollScreen(){
    var scroll = setInterval(window.scrollBy(0, 1000), 100);
};
*/