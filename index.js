convertToBitfield = function(num) {
	var field = {};

	while (num != 0) {
		var n;
		for (n = 0; num - Math.pow(2, n + 1) >= 0; n++) {
			field[Math.pow(2, n)] = false;
		}
		field[Math.pow(2, n )] = true;
		num -= Math.pow(2, n );
	}
	return field;

}

updateRow = function(limiter, number) {
	var field = convertToBitfield(number);
	for (var property in field) {
		if (field.hasOwnProperty(property)) {
			var sel = $('[data-role=' + limiter + '] > [data-value=' + property + ']');
			if (field[property]) {
				sel.addClass('on');
			} else {
				sel.removeClass('on');
			}
		}
	}
}

updateClock = function() {
	var date = new Date();
	updateRow('hours', date.getHours());
	updateRow('minutes', date.getMinutes());
	updateRow('seconds', date.getSeconds());
}

$(document).ready(function() {
	updateClock();
	setInterval(updateClock, 500);
	
	$(document).on('keydown', function(ev) {
		if (ev.keyCode == 32) {
			$('.light').toggleClass('purist');
		}
	})	
})
