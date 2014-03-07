jQuery(function($){
	$('button[name="addHousemate"]').click(function() {
	    var value = $('input[id="addHousemate"]').val();
	    $('tr td:last').append("<tr><td>" + value + "</td></tr>");
	    $('input[id="addHousemate"]').val('');
	});
});

jQuery(function($){
	$('button[name="addChore"]').click(function() {
	    var value = $('input[id="addChore"]').val();
	    $('tr td:last').append("<tr><td>" + value + "</td></tr>");
	    $('input[id="addChore"]').val('');
	});
});