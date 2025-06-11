const navRight = document.querySelector(".nav-right");
const menu = document.querySelector(".ham");

menu.addEventListener("click", () => {
  navRight.classList.toggle("active");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, //mobile screen
  centeredSlides: true,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
