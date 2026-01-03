$(document).ready(function () {
  $(".grid").imagesLoaded(function () {
    $(".grid").masonry({
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
      gutter: ".gutter-sizer",
      percentPosition: true,
      horizontalOrder: true,
    });
  });

  $("#top-button").click(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $(".carousel-wrapper").each(function () {
    let carousel = $(this).find(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
    });

    $(this)
      .find(".intro-prev")
      .click(() => {
        carousel.trigger("prev.owl.carousel");
      });

    $(this)
      .find(".intro-next")
      .click(() => {
        carousel.trigger("next.owl.carousel");
      });
  });
});
