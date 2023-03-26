import { galleryItems } from './gallery-items.js';
// console.log(galleryItems);

const ulEl = document.body.querySelector('.gallery');
// console.log(ulEl);

const markup = `${galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"        
        alt="${description}"
      />
    </a>
  </li>`).join('')}`;
// console.log(markup);

ulEl.innerHTML = markup;

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', 
captionPosition: 'button',
captionDelay: 250,});