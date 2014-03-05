jQuery(function($){
    $('input[name="add"]').click(function() {
      	value = $('input[name="addItem"]').val();
             	$('td tr:last').after("<tr><td>" + value + "</td></tr>");
             	$('input[name="addItem"]').val("");
    });
});