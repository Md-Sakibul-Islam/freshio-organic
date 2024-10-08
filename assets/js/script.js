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
    responsive:[
      {
        breakpoint:576,
        settings:{
          arrows:false,
        }
      }
    ]
    
  });
  // slick slider end
  var mixer = mixitup('.mix-container');

  $(".testimonial-inner").slick({
    infinite: true,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    speed:1000,
    prevArrow: '<button class="prev"><i class="fa-solid fa-angle-right"></i> </button>',
    nextArrow:'<button class="next"><i class="fa-solid fa-angle-left"></i> </button>',
  });
  // slick slider end

  AOS.init({
    delay: 300, 
  duration: 1700,
  });
});
