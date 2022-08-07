const swiperWrapper = document.getElementById("swiper-wrapper");

const url_images = "https://picsum.photos/v2/list?limit=5";

const getImages = async () => {
  try {
    const response = await fetch(url_images);
    const imagesList = await response.json();

    let slides = "";

    imagesList.forEach((image) => {
      slides += `
      <img src="${image.download_url}" class="swiper-slide" />
    `;
    });
    swiperWrapper.innerHTML = slides;
    //TODO: Agregar un mensaje personalizado en pantalla en caso de error
  } catch (error) {
    console.log(error);
  }
};

export default getImages;
