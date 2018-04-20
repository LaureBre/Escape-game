$( function() {			// initialisation JQuery


	$('#drag').on('mouseover', function() {
  		$( ".zoomable" ).removeClass('zoom_on');
  		$( ".draggable" ).draggable({ disabled: false });
  		$('#drag').parent().css('background-color', '#64DA58');
  		$('#loupe').parent().css('background-color', 'white');
	});

	$('#loupe').on('mouseover', function() {
  		$( ".zoomable" ).addClass('zoom_on');
  		$( ".draggable" ).draggable({ disabled: true });
  		$('#loupe').parent().css('background-color', '#64DA58');
  		$('#drag').parent().css('background-color', 'white');
	});
  
  $('.inputable').on('mouseover', function() {
      $(this).css('border', '1px solid grey');
      var x = $(this).width();
      $(this).width(( 1.1 * x ) + "px");
      $('#story').html('inputable');
  });

	var licence = 'Icons made by http://www.freepik.com from https://www.flaticon.com/, https://www.flaticon.com/authors/smashicons from https://www.flaticon.com/ licensed by http://creativecommons.org/licenses/by/3.0/';

 });