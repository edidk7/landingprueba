$(document).ready(function () {
  AOS.init({
    duration: 1200,
  });
  // Inicializando el carrousel para dispositivos móviles
  $("#owl-carousel-responsive-home").owlCarousel({
    navigation: true, // Show next and prev buttons
    autoplay: true,
    autoplayTimeout: 3500,
    slideSpeed: 400,
    loop: true,
    paginationSpeed: 500,
    nav: false,
    items: 1,
    dots: true,
    dotsData: false,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,
    animateOut: "fadeOutRight",
    animateIn: "fadeIn",
    autoHeight: true,
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() == 0) {
      $(".navbar").removeClass("tiny");
      $('.fixed-top').addClass("navbar-color");
      $('.fixed-top').removeClass("navbar-transparent");
    } else {
      $('.fixed-top').addClass("navbar-transparent");
      $('.fixed-top').css('transition', 'all 0.5s ease-in-out 0s');
      $(".navbar").addClass("tiny");
    }
  });
});

$("#accordion").on("hide.bs.collapse show.bs.collapse", (e) => {
  $(e.target).prev().find("i:last-child").toggleClass("fa-minus fa-plus");
});
