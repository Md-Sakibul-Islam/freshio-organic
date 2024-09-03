$(document).ready(function () {
  // slick slider start
  $(".hero-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    speed:1000,
    prevArrow: '<button class="prev"><i class="fa-solid fa-angle-right"></i> </button>',
    nextArrow:'<button class="next"><i class="fa-solid fa-angle-left"></i> </button>',
  });
  // slick slider end
});
