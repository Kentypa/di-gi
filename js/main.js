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
