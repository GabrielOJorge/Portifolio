const imageImg = document.querySelectorAll(".img-img");
const imgOverlay = document.querySelectorAll(".img-overlay");
const arrowBtn = document.querySelectorAll(".arrow-btn");

for (let i = 0; i < imgOverlay.length; i++) {
  imgOverlay[i].addEventListener("mouseenter", () => {
    imageImg[i].style.opacity = "0"
  });

  imgOverlay[i].addEventListener("mouseleave", () => {
    imageImg[i].style.opacity = "1"
  });
};