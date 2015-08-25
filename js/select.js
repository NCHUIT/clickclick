jQuery(function() {
	// var clicked = {};
	// var target = 100;
	// var main = jQuery("#main");
	var space = 0;
	console.log(space);
	//<< 37,>> 39
	$('body').keyup(function(event) 
	{
		console.log(event);
		if(event.keyCode == 39 && space < 3)
			space++;
		if(event.keyCode == 37 && space > 0)
			space--;
		console.log(space);
		// if (event.keyCode <= 32)
		// 	return;
		// if (clicked[event.keyCode]){
		// 	if (clicked[event.keyCode][0] < target) {
		// 		clicked[event.keyCode][1].text(event.key + ' : ' + (++clicked[event.keyCode][0]))
		// 	} else {
		// 		clicked[event.keyCode][1].css({
		// 			'font-size' : '100px'
		// 		});
		// 		clicked[event.keyCode][1].removeClass('animated bounceInRight').addClass('animated wiggle');
		// 		$('body').unbind('keyup');
		// 	}
		// } else {
		// 	var p = jQuery('<p>'+event.key+' : 0</p>');
		// 	p.addClass('animated bounceInRight');
		// 	clicked[event.keyCode] = [0, p];
		// 	main.append(p);
		// }
	});
});
