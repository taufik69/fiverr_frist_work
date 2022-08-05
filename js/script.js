$(function(){
    'use strict';
    $('.slick_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
       
        // prevArrow:'<i class="fas fa-chevron-left pre_arrow"></i>',
        // nextArrow:'<i class="fas fa-chevron-right next_arrow"></i>',
        // dots:false,
        arrows:false,
       

        responsive: [{

            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              infinite: true
            }
      
          }, {
      
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              dots: false
            }
      
          }, {
      
            breakpoint: 300,
            settings: "unslick" // destroys slick
      
          }]
      });


});