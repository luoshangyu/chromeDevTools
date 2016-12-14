

chrome.devtools.panels.create("Lucas Luo Panel",
    "MyPanelIcon.png",
    "Panel.html",
    function(panel) {
    }
);



chrome.devtools.panels.elements.createSidebarPane("Lucas Luo Sidebar",
    function(sidebar) {
        // sidebar initialization code here
        sidebar.setObject({ some_data: "Some data to show" });
});

alert("Lucas Luo");
chrome.devtools.network.onNavigated.addListener(function (url) {
	alert('starting...');
});

chrome.devtools.network.onRequestFinished.addListener(function(request) {
	
});

function checkRequestCount2() {
	if(chrome.devtools.inspectedWindow.tabId == pcTabId) {
		sendPC();
	}
}

function sendPC() {
	chrome.devtools.inspectedWindow.eval('performance.timing.loadEventEnd',"",function(result, exceptionInfo){
			chrome.devtools.network.getHAR(function(harLog) {
				clearTimeout(navTime);
				var loadTimeVal = (end-start) / 1000;
				endTimeVal = new Date();
				alert('hello');
				$.ajax({
					url: 'http://localhost:4567/automation/sendHar/PC',
					type: 'POST',
					dataType: 'json',
					data: escape(JSON.stringify(harLog)),
					error: function(d) {
					},
					success: function(d, s) {
					}
				});
			});
		});
}