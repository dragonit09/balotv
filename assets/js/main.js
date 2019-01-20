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
    $( "body" ).on( "click", "#menu-toggle, #main-menu-overlay", function(e) {
    	if($("body").hasClass("narrow")){ // Đang ẩn menu
    		$("body").removeClass("narrow");
            if($("body").hasClass("menu-over")){
                $("#main, #footer").append('<div id="main-menu-overlay" style="background: rgba(0, 0, 0, 0.5); position: absolute; width: 100%; height: 100%; top: 0; left: 0; z-index: 1;"></div>');
                $("#header").addClass("un-boxshadow");
                $("#footer").css({"z-index":0});
                $("body").css({"overflow":"hidden"});
            }
        } else { // Menu đang show
    		$("body").addClass("narrow");
            if($("body").hasClass("menu-over")){
                $("div#main-menu-overlay").remove();
                $("#header").removeClass("un-boxshadow");
                $("#footer").css({"z-index":2});
                $("body").css({"overflow":"auto"});
            }
        }

        e.preventDefault();
    });

});