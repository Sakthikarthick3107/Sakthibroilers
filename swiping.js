const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay:{
        delay:5000,
        disableOnIneraction:false,
    },
    direction: 'horizontal',
    loop: true,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });