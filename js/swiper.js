document.addEventListener("DOMContentLoaded", () => {
    //-------------------
    // SWIPER
    $(".content_swiper").each(function (index) {
      console.log("running SWIPER JS "+ $(this).find(".swiper")[0]);

      const slider1 = new Swiper($(this).find(".swiper.is-slider-service-detail")[0], {
        //loop: true,
        autoHeight: false,
        followFinger: true,
        //freeMode: false,
        slideToClickedSlide: false,
        rewind: false,
        mousewheel: {
          forceToAxis: true,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        slidesPerView: 1,
        spaceBetween: "20px",
        breakpoints: {
          // mobile landscape
          480: {
            slidesPerView: 1.5,
            spaceBetween: "20px",
          },
          // tablet
          768: {
            slidesPerView: 1.5,
            spaceBetween: "20px",
          },
          // desktop
          992: {
            slidesPerView: 2.5,
            spaceBetween: "20px",
          },
        },
        navigation: {
            nextEl: $(this).find(".swiper-next")[0],
            prevEl: $(this).find(".swiper-prev")[0],
            disabledClass: "is-disabled"
          },
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active",
      });



      const slider2 = new Swiper($(this).find(".swiper.is-slider-solutions-detail")[0], {
        //loop: true,
        autoHeight: false,
        followFinger: true,
        //freeMode: false,
        slideToClickedSlide: false,
        rewind: false,
        mousewheel: {
          forceToAxis: true,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        slidesPerView: 1,
        spaceBetween: "20px",
        breakpoints: {
          // mobile landscape
          480: {
            slidesPerView: 1.5,
            spaceBetween: "20px",
          },
          // tablet
          768: {
            slidesPerView: 1.5,
            spaceBetween: "20px",
          },
          // desktop
          992: {
            slidesPerView: 1.5,
            spaceBetween: "20px",
          },
        },
        navigation: {
            nextEl: $(this).find(".swiper-next")[0],
            prevEl: $(this).find(".swiper-prev")[0],
            disabledClass: "is-disabled"
          },
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active",
      });


      const slider3 = new Swiper($(this).find(".swiper.is-slider-industries-detail")[0], {
        //loop: true,
        //autoHeight: false,
        //followFinger: true,
        freeMode: false,
        //slideToClickedSlide: false,
        rewind: false,
        mousewheel: {
          forceToAxis: true,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        slidesPerView: 1,
        spaceBetween: "20px",
        breakpoints: {
          // mobile landscape
          480: {
            slidesPerView: 1.5,
            spaceBetween: "20px",
          },
          // tablet
          768: {
            slidesPerView: 3,
            spaceBetween: "20px",
          },
          // desktop
          992: {
            slidesPerView: 3,
            spaceBetween: "20px",
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: "20px",
          },
        },
        navigation: {
            nextEl: $(this).find(".swiper-next")[0],
            prevEl: $(this).find(".swiper-prev")[0],
            disabledClass: "is-disabled"
          },
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active",
      });


      const slider4 = new Swiper($(this).find(".swiper.is-slider-careers")[0], {
        //loop: true,
        //autoHeight: false,
        //followFinger: true,
        freeMode: false,
        //slideToClickedSlide: false,
        rewind: false,
        mousewheel: {
          forceToAxis: true,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        slidesPerView: 1,
        spaceBetween: "20px",
        breakpoints: {
          // mobile landscape
          480: {
            slidesPerView: 1.5,
            spaceBetween: "20px",
          },
          // tablet
          768: {
            slidesPerView: 3,
            spaceBetween: "20px",
          },
          // desktop
          992: {
            slidesPerView: 3,
            spaceBetween: "20px",
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: "20px",
          },
        },
        navigation: {
            nextEl: $(this).find(".swiper-next")[0],
            prevEl: $(this).find(".swiper-prev")[0],
            disabledClass: "is-disabled"
          },
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active",
      });






  
    });
    
  }); //--doc ready





  