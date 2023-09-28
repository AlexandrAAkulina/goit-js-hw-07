import { galleryItems } from './gallery-items.js';
// Change code below this line

// Find gallery element

const galleryEl = document.querySelector('.gallery');

// Add event handler on gallery

galleryEl.addEventListener("click", onGalleryClick);

// Create gallery markup and paste it

const galleryMarkup = createGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery(items) {
     return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

function onGalleryClick(event) {
    event.preventDefault();

    if (event.target.classList.contains('gallery__image')) {
        const source = event.target.dataset.source;
        const instance = basicLightbox.create(`
    <img src="${source}"width="1400" height="800">`);
        instance.show();
    }
}


console.log(galleryItems);
