const swiperWrapper = document.getElementById("swiper-wrapper");

const url_images = "https://picsum.photos/v2/list?limit=5";

const getImages = async () => {
  const response = await fetch(url_images);
  const imagesList = await response.json();

  let slides = "";

  imagesList.forEach((image) => {
    slides += `
      <img src="${image.download_url}" class="swiper-slide" />
    `;
  });
  swiperWrapper.innerHTML = slides;
};

export default getImages;
