document.getElementById('copy_b').onclick = function CopyToClipboard() {
  
  window.getSelection().removeAllRanges();
 
if (window.getSelection) { 
    var range = document.createRange();
    range.selectNode(document.getElementById('output'));
    window.getSelection().addRange(range);
    document.execCommand("Copy");
    window.getSelection().removeAllRanges(); 
  }
}