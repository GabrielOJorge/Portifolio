const imageImg = document.querySelectorAll(".img-img");
const imgOverlay = document.querySelectorAll(".img-overlay");

for (let i = 0; i < imgOverlay.length; i++) {
  imgOverlay[i].addEventListener("mouseenter", () => {
    imageImg[i].style.filter = "blur(1.5px)"
  });

  imgOverlay[i].addEventListener("mouseleave", () => {
    imageImg[i].style.filter = "none"
  });
}