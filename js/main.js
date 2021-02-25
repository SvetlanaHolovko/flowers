$(document).ready(function () {
  const flowersSlider = new Swiper('.flowers-slider', {
    // параметры слайдера
    loop: true,
    slidesPerView: 6,

    // подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // параметры по умолчанию
    slidesPerView: 1,
    spaceBetween: 10,
    // Настройки адаптивной версии
    breakpoints: {
      // если браузер >= 320px
      320: {
        slidesPerView: 2,
      },
      // если браузер >= 480px
      480: {
        slidesPerView: 3,
      },
      // если браузер >= 640px
      640: {
        slidesPerView: 4,
      },
      // если браузер >= 992px
      992: {
        slidesPerView: 6,
      }
    }
  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // параметры слайдера
    loop: true,
    slidesPerView: 1,

    // подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : './../img/reviews/review-1.jpg',
      opts : {
        caption : 'First caption',
        thumb   : './../img/reviews/review-1.jpg'
      }
    },
    {
      src  : './../img/reviews/review-2.jpg',
      opts : {
        caption : 'Second caption',
        thumb   : './../img/reviews/review-2.jpg'
      }
    },
    {
      src  : './../img/reviews/review-3.jpg',
      opts : {
        caption : 'Second caption',
        thumb   : './../img/reviews/review-3.jpg'
      }
    },
    {
      src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
      opts : {
        caption : 'Second caption',
        thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
      }
    },
    {
      src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
      opts : {
        caption : 'First caption',
        thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});
});