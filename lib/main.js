var tabs = require("sdk/tabs");
var contextMenu = require("sdk/context-menu");
var timer = require('sdk/timers');

var menuItem = contextMenu.Item({
	label: "Refresh every 5 min",
	contentScript: 'self.on("click", function () {  self.postMessage(); });',
	onMessage: function() {
		var tab = tabs.activeTab;
		timer.setInterval(function() { tab.reload(); }, 300000);
	}
});