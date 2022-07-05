const imageImg = document.querySelectorAll(".img-img");
const imgOverlay = document.querySelectorAll(".img-overlay");

for (let i = 0; i < imgOverlay.length; i++) {
  imgOverlay[i].addEventListener("mouseenter", () => {
    imageImg[i].style.opacity = "0"
  });

  imgOverlay[i].addEventListener("mouseleave", () => {
    imageImg[i].style.opacity = "1"
  });
};

const swiper = new Swiper('.swiper', {
  loop: true,

  effect: "coverflow",

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
});
