// $("#user-1").click(function () {
//     if ($(".info-users__right-items").hasClass("open")) {
//         $(".info-users__right-items").removeClass("open");
//     } else {
//         $(".info-users__right-items").addClass("open");
//     }
// });
$("#user-2").click(function () {
    if ($(".info-users__right-items").hasClass("open")) {
        $(".info-users__right-items").removeClass("open");
    } else {
        $(".info-users__right-items").addClass("open");
    }
});
$("#user-3").click(function () {
    if ($(".info-users__right-items").hasClass("open")) {
        $(".info-users__right-items").removeClass("open");
    } else {
        $(".info-users__right-items").addClass("open");
    }
});

$("#vladivostok").click(function () {
    $("#modal-small__vladivostok").toggleClass("open")
    $(".modal-small").toggleClass("open")
})

$("#krasnodar").click(function () {
    $("#modal-small__krasnodar").toggleClass("open")
    $(".modal-small").toggleClass("open")
})

$("#khabarovsk").click(function () {
    $("#modal-small__khabarovsk").toggleClass("open")
    $(".modal-small").toggleClass("open")
})

$(".modal-small__exit").click(function () {
    $("#modal-small__vladivostok").removeClass("open")
    $("#modal-small__krasnodar").removeClass("open")
    $("#modal-small__khabarovsk").removeClass("open")
    $(".modal-small").removeClass("open")
})

$(".modal-small__next-vladivostok").click(function () {
    $("#modal-big__vladivostok").toggleClass("open")
    $("#modal-small__vladivostok").removeClass("open")
})

$(".modal-small__next-krasnodar").click(function () {
    $("#modal-big__krasnodar").toggleClass("open")
    $("#modal-small__krasnodar").removeClass("open")
})

$(".modal-small__next-khabarovsk").click(function () {
    $("#modal-big__khabarovsk").toggleClass("open")
    $("#modal-small__khabarovsk").removeClass("open")
})

$(".modal-big__cloce").click(function () {
    $("#modal-big__vladivostok").removeClass("open")
    $("#modal-big__krasnodar").removeClass("open")
    $("#modal-big__khabarovsk").removeClass("open")
    $(".modal-small").removeClass("open")
})


$(document).ready(function(){
    $('.navigation a').each(function () {
    if (this.href == location.href) $(this).addClass('active');
    });
});


