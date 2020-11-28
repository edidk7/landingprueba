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
});

$("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
    $(e.target)
      .prev()
      .find("i:last-child")
      .toggleClass("fa-minus fa-plus");
  });
  
