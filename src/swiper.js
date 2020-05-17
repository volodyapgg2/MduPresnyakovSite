const swiperCcontainer = document.querySelector('.swiper-container'),
 paginationEl= document.querySelector('.swiper-pagination')



let mySwiper = new Swiper (swiperCcontainer, {
    pagination: {
        el: paginationEl,
        clickable: true,
    }
    
  })