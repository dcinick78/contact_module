$(document).ready(function () {
    $(window).scroll(function (e) {
        if ($(this).scrollTop() > 6) {
            $(".progress").removeClass("hid");
            $conter = $(this).scrollTop();
            let _percent = parseInt( (100 / $(document).height()) * ($conter ) ) * 1.25;
            $(".progress-bar").css("width", _percent + "%");

        } else {
            $(".progress").addClass("hid");

        }
    });
    //  click to show about
    $("#btnabout").click(function () {
        $("#about").css("display", "block")
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            displayscroll();
        }
    });


    $('.grt-menu').children().click(function () {
        console.log('here in click' + $(this));
        $('.grt-menu').children().removeClass('active');
        $(this).addClass('active');
    });
});

function displayscroll() {
    $("#about").css("display", "block");
}