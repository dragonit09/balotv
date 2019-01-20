$( document ).ready(function() {
    console.log( "ready!" );
    //----- OPEN POPUP
    $( "body" ).on( "click", "[k-popup-open]", function(e) {
    	$('.popup').fadeOut(200);
        var targeted_popup_class = $(this).attr('k-popup-open');
        $('[k-popup="' + targeted_popup_class + '"]').fadeIn(100);
        e.preventDefault();
    });
    //----- CLOSE POPUP
    $( "body" ).on( "click", "[k-popup-close]", function(e) {
        var targeted_popup_class = $(this).attr('k-popup-close');
        $('[k-popup="' + targeted_popup_class + '"]').fadeOut(200);
        e.preventDefault();
    });
    // #menu-toggle click
    $( "body" ).on( "click", "#menu-toggle", function(e) {
    	if($("body").hasClass("narrow"))
    		$("body").removeClass("narrow");
    	else 
    		$("body").addClass("narrow");
        e.preventDefault();
    });
});