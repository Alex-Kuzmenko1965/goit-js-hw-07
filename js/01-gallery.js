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

// let imgModalVisible;

function handleClick({ target }) {
  event.preventDefault();  
  basicLightbox.create(`
  <img width="1280" height="840" src="${target.dataset.source}">`).show(basicLightbox);  
  // imgModalVisible = document.querySelector(".basiclightbox--visible");
  // console.log(imgModalVisible);
};

document.addEventListener('keydown', handleModalClose);

function handleModalClose({code}) {  
  if (code === 'Escape') {
  //   imgModalVisible.remove();
  // } else {
    // console.log(code);  
  return;}
};