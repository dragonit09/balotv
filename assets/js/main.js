$( document ).ready(function() {

    function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }
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
    $( "form#popup-signin-form" ).on( "submit", function( e ) {
        e.preventDefault();
        var email = $( "form#popup-signin-form input[name=email]" ).val();
        var password = $( "form#popup-signin-form input[name=password]" ).val();
        Validate.setInfo(email, password, '');
        Validate.doLogin();
    });
    $( "form#popup-signup-form" ).on( "submit", function( e ) {
        e.preventDefault();
        var email = $( "form#popup-signup-form input[name=email]" ).val();
        var password = $( "form#popup-signup-form input[name=password]" ).val();
        var username = $( "form#popup-signup-form input[name=username]" ).val();
        Validate.setInfo(email, password, username);
        Validate.doRegister();
    });
});
var Validate = new function(){
    this.email = '';
    this.password = '';
    this.username = '';

    this.setInfo = function(email, password, username){
        this.email = email;
        this.password = password;
        this.username = username;
    };

    this.isEmail = function(){
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(this.email);
    };

    this.doLogin = function(){
        if(this.email == '' || this.isEmail(this.email) == false || this.password == ''){
            // Warn if email and password empty or wrong format.
            $("form#popup-signin-form #sign-error-msg").css({"display":"block"}).html('<div class="alert alert-danger">Vui lòng nhập đầy đủ thông tin Email và Password!<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a></div>');
            if(this.email == '' || this.isEmail(this.email) == false){
                $("form#popup-signin-form").find("input[type=email]").css({"border":"1px solid #ff0000"});
            }
            if( this.password == '' ){
                $("form#popup-signin-form").find("input[type=password]").css({"border":"1px solid #ff0000"});
            }
        } else {
            $.ajax({
                        type : "POST",
                        dataType : "JSON",
                        url : '/login',
                        data : {
                            email: this.email,
                            password : this.password
                        },
                        context: this,
                        beforeSend: function(){},
                        success: function(response) {
                            
                            if(response.isSuccess) {
                               // If login success, hide Popup login and Replace #user_place
                               $('[k-popup="login"]').fadeOut(200);
                               $("#user-place").html('<a href="#" title="User" class="user-avatar"><img src="assets/images/noavatar.png"></a>');
                                window.location.href = '/';
                            }
                            else {
                               $("form#popup-signin-form #sign-error-msg").css({"display":"block"}).html('<div class="alert alert-danger">'+response.message+'<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a></div>');
                               
                            }
                        },
                        error: function( e ){
                            var response = JSON.parse( e.responseText );
                            var msg = '';
                            if(typeof response.error === 'string'){
                                msg = response.message;
                            } else{
                                for(let i = 0; i < response.error.errors.length; i++) {
                                  var field = response.error.errors[i].field[0];
                                  var messages = response.error.errors[i].messages;
                                  console.log(messages);
                                  for(let z = 0; z < messages.length; z++) {
                                      msg = msg + messages[z] + '<br/>';
                                  }
                              }
                            } 
                            $("form#popup-signin-form #sign-error-msg").css({"display":"block"}).html('<div class="alert alert-danger">'+msg+'<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a></div>');
                          
                        }
            });
        }
    };
    this.doRegister = function(){
        if( this.email == '' || this.isEmail(this.email) == false || this.password == '' || this.username == ''){
            // Warn if email and password empty or wrong format.
            $("form#popup-signup-form #sign-error-msg").css({"display":"block"}).html('<div class="alert alert-danger">Vui lòng nhập đầy đủ thông tin Email và Password!<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a></div>');
            if(this.email == '' || this.isEmail(this.email) == false){
                $("form#popup-signup-form").find("input[type=email]").css({"border":"1px solid #ff0000"});
            }
            if( this.password == '' ){
                $("form#popup-signup-form").find("input[type=password]").css({"border":"1px solid #ff0000"});
            }
            if( this.username == '' ){
                $("form#popup-signup-form").find("input[type=text]").css({"border":"1px solid #ff0000"});
            }
        } else {
            $.ajax({
                        type : "POST",
                        dataType : "JSON",
                        url : '/register',
                        data : {
                            email: this.email,
                            password : this.password,
                            name : this.username
                        },
                        context: this,
                        beforeSend: function(){},
                        success: function(response) {
                            
                            if(response.isSuccess) {
                               // If register success, hide Popup register and show popup login
                               $("[k-popup-open=login]").click();
                            }
                            else {
                                //console.log(response);
                                var msg = '';
                                for(let i = 0; i < response.error.errors.length; i++) {
                                    var field = response.error.errors[i].field[0];
                                    var messages = response.error.errors[i].messages;
                                    console.log(messages);
                                    for(let z = 0; z < messages.length; z++) {
                                        msg = msg + messages[z] + '<br/>';
                                    }
                                }
                               $("form#popup-signup-form #sign-error-msg").css({"display":"block"}).html('<div class="alert alert-danger">'+msg+'<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a></div>');
                               
                            }
                        },
                        error: function( e ){
                            var response = JSON.parse( e.responseText );
                            var msg = '';
                            if(typeof response.error === 'string'){
                                msg = response.message;
                            } else{
                                for(let i = 0; i < response.error.errors.length; i++) {
                                  var field = response.error.errors[i].field[0];
                                  var messages = response.error.errors[i].messages;
                                  console.log(messages);
                                  for(let z = 0; z < messages.length; z++) {
                                      msg = msg + messages[z] + '<br/>';
                                  }
                              }
                            } 
                            $("form#popup-signup-form #sign-error-msg").css({"display":"block"}).html('<div class="alert alert-danger">'+msg+'<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a></div>');
                             
                        }
            });
        }
    };
}