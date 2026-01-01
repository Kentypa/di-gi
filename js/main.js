$(function () {
  $(".grid").imagesLoaded(function () {
    $(".grid").masonry({
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
      gutter: ".gutter-sizer",
      percentPosition: true,
      horizontalOrder: true,
    });
  });

  const topButton = document.getElementById("top-button");
  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

$(document).ready(function () {
  let owlCarousel = $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
  });

  $(".intro-prev").click(() => {
    owlCarousel.trigger("prev.owl.carousel");
  });
});
