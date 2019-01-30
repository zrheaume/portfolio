$(".info-vis-info").hide()
$(function () {
    $(window).on("scroll", function (event) {
        var scrollPos = $(window).scrollTop();
        var zoom = scrollPos / 2
        // console.log(scrollPos)
        $(".header-img").css("background-size", `${100 + zoom}%`)
    })



    $(".info-vis-img").hover(
        (event) => {
        console.log("Mouseover")
            $(event.target).find(".info-vis-info").show()
            $(".info-vis-info").mouseout(() => {
                $(".info-vis-info").hide()
            })
        },
        (event) => {
            console.log("Mouseoff")
            $(event.target).find(".info-vis-info").hide()
        }
    )
})