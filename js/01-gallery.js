import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector("ul.gallery");

const cards = galleryItems
  .map(({ original, preview, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");

galleryList.insertAdjacentHTML("afterbegin", cards);

galleryList.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" />
`,
    {
      onClose: (instance) => {
        document.removeEventListener("keydown", onCloseModal);
      },
      onShow: (instance) => {
        document.addEventListener("keydown", onCloseModal);
      },
    }
  );

  instance.show();

  function onCloseModal(event) {
    if (event.key === "Escape") {
      instance.close();
    }
    console.log(event);
  }
}
