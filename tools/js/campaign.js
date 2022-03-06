var clock,c,delay=3000;
var initial_campaign;

switchCampaign = function(c) {
	var body = document.body;
	var active_index;
	
	if ($('#slide').siblings()) {
		var tmp = "";
		var campaigns = [];
		var children = $('#slide').children();
		
		for (var i = 0; i < children.length; i++) {
			if (children[i].className != 'undefined') {
				campaigns[i] = children[i].className;
			} 
			else {Console.log("Error!")}
		}
		
		if (campaigns[0] != initial_campaign) {
			for (var i = 0; i < campaigns.length; i++) {
				if (campaigns[i] == initial_campaign) {
					campaigns.splice(i, 1);
					campaigns.splice(0, 0, initial_campaign);
					break;
				}
			}
		}
		
		active_index = $.inArray(body.className, campaigns);
		
		if (active_index < campaigns.length - 1 && active_index != -1) {
			body.className = campaigns[active_index + 1];
		}
		else {
			body.className = campaigns[0];
		}
		
		window.clearTimeout(clock);
		delayswitch();
	}
	else {Console.log("Error: Không tìm thấy!")}
}

delayswitch = function() {clock = window.setTimeout(switchCampaign, delay);}

$(document).ready(function() {
	$('#slide li').hover(
		function() {window.clearTimeout(clock);},
		function() {delayswitch();}
	);
	$('#slideNav a').click(function(e) {
		document.body.className = this.parentNode.className;
		window.clearTimeout(clock);
		e.preventDefault();
	});
	initial_campaign = document.body.className;
	delayswitch();
});
