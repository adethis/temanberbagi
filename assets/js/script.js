$(document).ready(function() {
  $(".header-menu-mobile").on("click", function (event) {
    $(this).toggleClass("opened");
    $(this).attr("aria-expanded", $(this).hasClass("opened"));
    $(".header-menu").toggleClass("open");
    event.stopPropagation();
  });
  $("html").on("click", function (event) {
    if (!$(event.target).hasClass("header-menu-mobile")) {
      $(".header-menu-mobile").removeClass("opened")
      $(".header-menu").removeClass("open");
    }
  });
  $("input.number-only").keypress(function(event) {
    return /\d/.test(String.fromCharCode(event.keyCode));
  });
  $(".options-item").on("click", function() {
    let $element = $(this);
    let $others = $(".options-item");
    $others.each(function() {
      $(this).removeClass("selected");
    });
    $element.addClass("selected");
  });
  $("input#inputMetodePembayaran").on("click focus", function() {
    $("#modalMetodePembayaran").modal("show");
  });
  $("#modalMetodePembayaran .list-group-item").on("click", function() {
    let $element = $(this);
    let $others = $("#modalMetodePembayaran .list-group-item");
    $others.each(function() {
      $(this).removeClass("selected");
    });
    $element.addClass("selected");
  });
  $("#modalMetodePembayaran .btn-simpan").on("click", function() {
    let dataId = $("#modalMetodePembayaran .list-group-item.selected").attr("data-id");
    let dataName = $("#modalMetodePembayaran .list-group-item.selected").attr("data-name");
    $("input[name=metode-pembayaran]").val(dataId);
    $("#inputMetodePembayaran").val(dataName);
    $("#modalMetodePembayaran").modal("hide");
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        nav: false
      },
      640: {
        nav: true
      }
    }
  });
});