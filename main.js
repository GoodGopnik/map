$(".user-1").click(function () {
    $(".info-users__right-items").toggleClass("active")
});
$(".user-2").click(function () {
    $(".info-users__right-items").toggleClass("active")
});
$(".user-3").click(function () {
    $(".info-users__right-items").toggleClass("active")
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

$('.navigation a').each(function () {
    if (this.href == location.href) $(this).addClass('active');
});

$(".modal-big__btn-1").addClass("active");

$(".modal-big__btn-2").click(function () {
    $(this).addClass("active")
    $(".modal-big__btn-1").removeClass("active")
    $(".modal-big__btn-3").removeClass("active")
    $(".modal-big__btn-text-2").css({'display' : 'block'})
    $(".modal-big__btn-text-1").css({'display' : 'none'})
    $(".modal-big__btn-text-3").css({'display' : 'none'})
})
$(".modal-big__btn-1").click(function () {
    $(this).addClass("active")
    $(".modal-big__btn-2").removeClass("active")
    $(".modal-big__btn-3").removeClass("active")
    $(".modal-big__btn-text-2").css({'display' : 'none'})
    $(".modal-big__btn-text-1").css({'display' : 'block'})
    $(".modal-big__btn-text-3").css({'display' : 'none'})
})
$(".modal-big__btn-3").click(function () {
    $(this).addClass("active")
    $(".modal-big__btn-1").removeClass("active")
    $(".modal-big__btn-2").removeClass("active")
    $(".modal-big__btn-text-2").css({'display' : 'none'})
    $(".modal-big__btn-text-1").css({'display' : 'none'})
    $(".modal-big__btn-text-3").css({'display' : 'block'})
})