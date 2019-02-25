
 document.addEventListener('DOMContentLoaded', function() {

	chrome.tabs.executeScript( null, {code: '(' +getDivData+ ')();' }, function(selection) {
//var scroll = setInterval(function(){ window.scrollBy(0, 1000); console.log('start');}, 2000);

		var result = selection[0];
	
		document.getElementById("output").innerHTML = result;
    	document.execCommand("copy");
     
	});

});

function getDivData(){
    var i = 0;
    while(i < 10){
    	window.scrollBy(0, 10000);
    	i++;
    }
    var divs = document.getElementsByTagName('div');
    var strDiv = '';
    for(var i=0; i<divs.length; i++){
	    if(divs[i].getAttribute('class')=="No" ){
	        strDiv += divs[i].innerHTML + "\n";
	    }
    }
    return strDiv;
};