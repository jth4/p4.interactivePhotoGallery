//LETS GO! Search by jth4 2017

/*////////////////////////////////////////MAIN IDEA//
if input text contains any word in a picture's caption,
display only those pictures and remove the others;
reset images if user changes text */

var $input = $('input').val().toUpperCase();
var $cap = $('data-title').val().toUpperCase();
var $img = $('img');

if( $cap *= $input ) {
	$(this).hide();

//	$(this).show(); 
//	} else {
//	$(this).hide();
};

$('data-title').not($input.val()).hide();