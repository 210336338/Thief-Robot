chrome.tabs.onCreated.addListener(function(tab) {
  document.addEventListener('mousedown',function(event){
	alert('ok');
    if(event.button == 2) {
        var parent = chrome.contextMenus.create({"title": "Test parent item"});
    }
},false);
});