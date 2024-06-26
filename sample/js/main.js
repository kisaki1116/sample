
$(function () {
    // menu-btn
    $(".hamburger-menu, .menu").on("click", function () {
        $("header").toggleClass("open");
    });

    $(window).scroll(function () {
        $(".slide-visual li").each(function () {

            var scroll = $(window).scrollTop();

            var target = $(this).offset().top;

            var windowHeight = $(window).height();

            if (scroll > target - windowHeight + $(this).outerHeight()) {
                // outerHeight()はpaddingを含めた高さを取得する
                $(this).addClass("slide");
            }
        });
    });
});


