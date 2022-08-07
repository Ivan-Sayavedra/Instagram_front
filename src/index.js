import getImages from "./js/api_images.js";

// SWIPER
const swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// BTN LIKE
let likebtn = document.getElementById("likebtn");
let likebtn_class = likebtn.className;
function toggle() {
  if (likebtn_class == "active") {
    likebtn_class = "disable";
    console.log(likebtn_class);
  } else {
    likebtn_class = "active";
    console.log(likebtn_class);
  }
}
likebtn.addEventListener("click", toggle);

// API images
getImages();
