$(document).ready(function () {
    $("form.dropzone").dropzone({
        dictDefaultMessage: "Kéo và thả tệp tin",
    });

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
});