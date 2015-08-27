jQuery(function() {
	var clicked = {};
	var target = 100;
	var main = jQuery("#main");
	$('body').keyup(function(event) {
		if (event.keyCode <= 32)
			return;
		if (clicked[event.keyCode]){
			if (clicked[event.keyCode][0] < target) {
				clicked[event.keyCode][1].text(event.key + ' : ' + (++clicked[event.keyCode][0]));
				clicked[event.keyCode][1].addClass('animated wiggle');
			} else {
				clicked[event.keyCode][1].css({
					'font-size' : '100px'
				});
				
				$('body').unbind('keyup');
			}
		} else {
			var p = jQuery('<p>'+event.key+' : 0</p>');
			p.addClass('animated bounceInRight');
			clicked[event.keyCode] = [0, p];
			main.append(p);
		}
	});
	$('body').keydown(function(event) {
		if (clicked[event.keyCode]) {
			if (clicked[event.keyCode][1].removeClass('animated wiggle'));
		}
	});
});

jQuery(function() {
	var select = 1;
	var cats = {
		'no1' : jQuery('#cat-1>img').first(),
		'no2' : jQuery('#cat-2>img').first(),
		'no3' : jQuery('#cat-3>img').first(),
		'no4' : jQuery('#cat-4>img').first(),
	};
	var msg =  {
		'press_again' : jQuery('<h3>Press this selection and the key again to use this cat to play game</h3>'),
		'selected' : function(ary){
				return jQuery('<h3>cat-' + ary[1] + 'is selected by Key:'+ String.fromCharCode(ary[0]) +'</h3>');
		},
		'keyused' : jQuery('<h3>This key is already in used</h3>'),
	};
	var playerss = [];
	var playerss_cnt = 0;
	function $catid(select) {
		return jQuery('#cat-' + select);
	}
	function $catimg(select) {
		return jQuery('#cat-' + select + '>img').first();
	}
	var selected_tag = jQuery('<h3>select</h3>'); 
	var arrow = jQuery('<img src="img/up_arrow.png">');
	// init arrow
	arrow.appendTo($catid(select));
	var i =0;
	setInterval(function() {
		var txt = 'img/cat-' + select + '-' + i++ + '.png';
		$catimg(select).attr('src', txt);
		if (i>3) i=0;
	}, 250)
	//<= 37,=> 39
	$('body').keydown(function(event) 
	{
/*<-*/	if( 37 == event.keyCode) { 
			if (select > 1)
				arrow.appendTo($catid(--select));
		} else
/*->*/	if( 39 == event.keyCode) {
			if (select < 4)
				arrow.appendTo($catid(++select));	
		} else
/*^*/	if( 38 == event.keyCode) {
			//
		} else
/*v*/	if ( 40 == event.keyCode) {
			//
		} else
/*Esc*/	if ( 27 == event.keyCode) {
			//
		} else
/*CR*/	if ( 13 == event.keyCode) {
			jQuery('#register').modal('show');
		} else 
		if ( event.keyCode > 32 ) {
			if (playone) {
				if (playone[] == event.keyCode && playone[1] == select) {
					var keyuse = false;
					if (players)
					for (var i = 0; i < players.length; i++) {
						if (event.keyCode == players[i][0]) {
							keyuse = true;
							break;
						}
					};
					if (keyuse) {
						msg.keyused.prependTo($catid(select))
						return;
					}
					msg.press_again.remove();
					msg.selected(players[players_cnt]).prependTo($catid(select));
					players_cnt++;
					console.log(players);
				}
				else {
					players[players_cnt] = [event.keyCode, select];
					msg.press_again.prependTo($catid(select));
				}
			}
			else {
				var playone = [event.keyCode, select];
				msg.press_again.prependTo($catid(select));
			}
		}
		else {
			console.log(event);
		}
	});
});
