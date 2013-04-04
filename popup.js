var sUrl = 'http://localhost:52248/server.php';
var isLoading = false;

window.onload = function(){
  $('#s').delegate('button','click',function(){
    chrome.tabs.executeScript(null, {code:'test();'});
  });
}