$(function () {
    $(window).on("scroll", function (event) {
        var scrollPos = $(window).scrollTop();
        var zoom = scrollPos / 2
        // console.log(scrollPos)
        $(".header-img").css("background-size", `${100 + zoom}%`)
    })
})