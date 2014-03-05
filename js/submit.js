jQuery(function($){
	$('button[name="addHousemate"]').click(function() {
	    var value = $('input[id="addHousemate"]').val();
	    $('tr td:last').append("<tr><td>" + value + "</td></tr>");
	    $('input[id="addHousemate"]').val('');
	});
});