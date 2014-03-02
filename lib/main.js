var tabs = require("sdk/tabs");
var contextMenu = require("sdk/context-menu");

var menuItem = contextMenu.Item({
	label: "Refresh every 5 min",
	contentScript: 'self.on("click", function () {  self.postMessage(); });',
	onMessage: function() {
		var tab = tabs.activeTab;
		tab.attach({
			contentScript: 'window.setTimeout(window.location.reload.bind(window.location), 300000);'
		});
		tab.on("ready", function() {
			tab.attach({
				contentScript: 'window.setTimeout(window.location.reload.bind(window.location), 300000);'
			})
		});
	}
});