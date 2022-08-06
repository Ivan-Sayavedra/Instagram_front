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

let url_images = "https://picsum.photos/v2/list?limit=5";

const getImages = async () => {
  const response = await fetch(url_images);
  const images = await response.json();
  console.log(images);
  // return response;
};
getImages();
