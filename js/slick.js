$(function () {
  $(".u-q-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".u-q-gallery-list-left",
    nextArrow: ".u-q-gallery-list-right",
  });
});

$(function () {
  $(".u-q-why-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    centerMode: true,
    cssEase: "linear",
    prevArrow: ".u-q-why-list-left",
    nextArrow: ".u-q-why-list-right",
  });
});
