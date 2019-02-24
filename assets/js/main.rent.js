$(document).ready(function () {
    $("form.dropzone").dropzone({
        dictDefaultMessage: "Kéo và thả tệp tin",
    });

    $('body').on('click', '#user-notifcation', function () {
        var __this = $('.dialog-show__notifications');
        __this.removeClass('d-none');
        document.body.addEventListener('click', __closeBoxNotify, false);
    });

<<<<<<< HEAD
    // var __isOpenCategory = false;
    // $("body").on('click', '#menu-category', function () {
    //     __isOpenCategory = !__isOpenCategory;
    //     var __this = $('.dialog-show__categories');
    //     if (__isOpenCategory) {
    //         __this.fadeIn(300);
    //         __this.removeClass('d-none').addClass('d-block');
    //     } else {
    //         __this.fadeOut(300);
    //         __this.removeClass('d-block').addClass('d-none');
    //     }
    // });
=======
    $('body').on('click', '#user-place', function () {
        var __this = $('.dialog-show__user');
        __this.removeClass('d-none');
        document.body.addEventListener('click', __closeBoxUser, false);
    });
>>>>>>> 9475df3eb11608d9d524e796f2b9fef78ab8989b

    $('body').on('click', '#menu-category', function () {
        var __this = $('.dialog-show__categories');
        __this.removeClass('d-none');
        document.body.addEventListener('click', __closeBoxCategories, false);
    });
    // && ! $(e.target).parents('').length
    function __closeBoxNotify(e){
        // console.log ($(e.target).parents());
        if(e.target.id != 'user-notifcation' &&  ! $(e.target).parents('div#notification-box').length ){
            document.body.removeEventListener('click', __closeBoxNotify, false);
            $('.dialog-show__notifications').addClass('d-none');
        }
    }
    function __closeBoxUser(e){
        if(e.target.id != 'user-place'){
            document.body.removeEventListener('click', __closeBoxUser, false);
            $('.dialog-show__user').addClass('d-none');
        }
    }
    function __closeBoxCategories(e){
        if(e.target.id != 'menu-category'){
            document.body.removeEventListener('click', __closeBoxCategories, false);
            $('.dialog-show__categories').addClass('d-none');
        }
    }
});