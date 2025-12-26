$(function () {
  $(".grid").imagesLoaded(function () {
    if (window.innerWidth >= 1440) {
      $(".grid").masonry({
        itemSelector: ".grid-item",
        horizontalOrder: true,
        fitWidth: true,
        gutter: 30,
      });
    }
  });

  const topButton = document.getElementById("top-button");
  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
