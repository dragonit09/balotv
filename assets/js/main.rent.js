$(document).ready(function () {
    $("form.dropzone").dropzone({
        dictDefaultMessage: "Kéo và thả tệp tin",
    });

    
    var __isOpenNotify = false;
    $("body").on('click', '#user-notifcation', function () {
        __isOpenNotify = !__isOpenNotify;
        var __this = $('.dialog-show__notifications');
        if (__isOpenNotify) {
            __this.fadeIn(300);
            __this.removeClass('d-none').addClass('d-block');
        } else {
            __this.fadeOut(300);
            __this.removeClass('d-block').addClass('d-none');
        }
    });

    var __isOpenCategory = false;
    $("body").on('click', '#menu-category', function () {
        __isOpenCategory = !__isOpenCategory;
        var __this = $('.dialog-show__categories');
        if (__isOpenCategory) {
            __this.fadeIn(300);
            __this.removeClass('d-none').addClass('d-block');
        } else {
            __this.fadeOut(300);
            __this.removeClass('d-block').addClass('d-none');
        }
    });

    var __isOpenUserOption = false;
    $("body").on('click', '#user-place', function () {
        __isOpenUserOption = !__isOpenUserOption;
        var __this = $('.dialog-show__user');
        if (__isOpenUserOption) {
            __this.fadeIn(300);
            __this.removeClass('d-none').addClass('d-block');
        } else {
            __this.fadeOut(300);
            __this.removeClass('d-block').addClass('d-none');
        }
    });
});