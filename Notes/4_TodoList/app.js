$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
});

/* Display trash-icon when hover on */
$('ul').on('mouseover', 'li', function(){
	$(this).children('span').css('width',40);
});

/* Hide trash-icon when hover off */
$('ul').on('mouseout', 'li', function(){
	$(this).children('span').css('width',0);
});


/* Delete a toto when click on trash-icon */
$('ul').on('click', 'span', function(evt){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	evt.stopPropagation();
});

/* Create a todo */
$('input[type="text"]').keypress(function(evt){
	if (evt.which === 13){	// check for the return key
		$('ul').append('<li><span><i class="fa fa-trash-o"></i></span> ' + $(this).val() + '</li>');
		$(this).val('');
	}
});