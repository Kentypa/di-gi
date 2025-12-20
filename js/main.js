$(function () {
  $(".grid").imagesLoaded(function () {
    $(".grid").masonry({
      itemSelector: ".grid-item",
      horizontalOrder: true,
      fitWidth: true,
      gutter: 30,
    });
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
  });
});
