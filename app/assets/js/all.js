var swiper = new Swiper(".course-swiper", {
    autoplay: {
        disableOnInteraction: false,
        delay: 0
    },
    speed: 1500,
    loop: true,
    spaceBetween: 16,
    slidesPerView: 3,
    slidesPerGroup: 1,
    centeredSlides: true,
    //多欄
    breakpoints: {
        768: {
            slidesPerView:6
        },
        992: {
            slidesPerView:6
        },
        1200:{
            slidesPerView:8
        },
        1300:{
            slidesPerView:9
        }
    }

});

const swiper1 = new Swiper('.student-swiper', {
    // Optional parameters
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay:{
        delay:1500
    },
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.student-swiper-button-next',
      prevEl: '.student-swiper-button-prev',
    },
  });