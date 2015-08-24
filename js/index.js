jQuery(function() {
	var clicked = {};
	var target = 100;
	var main = jQuery("#main");
	$('body').keyup(function(event) {
		if (event.keyCode <= 32)
			return;
		if (clicked[event.keyCode]){
			if (clicked[event.keyCode][0] < target) {
				clicked[event.keyCode][1].text(event.key + ' : ' + (++clicked[event.keyCode][0]))
			} else {
				clicked[event.keyCode][1].css({
					'font-size' : '100px'
				});
				clicked[event.keyCode][1].removeClass('animated bounceInRight').addClass('animated wiggle');
				$('body').unbind('keyup');
			}
		} else {
			var p = jQuery('<p>'+event.key+' : 0</p>');
			p.addClass('animated bounceInRight');
			clicked[event.keyCode] = [0, p];
			main.append(p);
		}
	});
});
