import { galleryItems } from './gallery-items.js';
// console.log(galleryItems);

const ulEl = document.body.querySelector('.gallery');
// console.log(ulEl);

const markup = `${galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`).join('')}`;
// console.log(markup);

// ulEl.insertAdjacentHTML('beforeend', markup);
// якщо <ul>-ка пуста, то краще використовувати innerHTML 
ulEl.innerHTML = markup;

const liEl = document.body.querySelector('.gallery__item');
// console.log(liEl);

ulEl.addEventListener('click', handleClick);

function handleClick(e) {
  e.preventDefault();  
  // console.log(e.target);
  // console.log(e.currentTarget);
  // console.log(e.target !== e.currentTarget);
  if (e.target !== e.currentTarget) {
  const instance = basicLightbox.create(`
  <img width="1280" height="840" src="${e.target.dataset.source}">`);
  instance.show();  

document.addEventListener('keydown', handleModalClose);

function handleModalClose({code}) {  
  if (code === 'Escape') {
  instance.close();
  return;}
};} return;
};