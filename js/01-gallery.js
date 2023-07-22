import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')


function makeGallery() {
    const galleryEl = galleryItems.map(item => ` <li class="gallery__item">
      <a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}" /></a>
    </li>`).join("")

    
    gallery.innerHTML = galleryEl;
}
makeGallery()


let lightbox = new SimpleLightbox('.gallery a', {
    caption: 'true',
    captionData: 'alt',
    captionPosition: 'bottom',
    captionDelay: '250'
});



// ------------------------------------------------------------------------------------------------

