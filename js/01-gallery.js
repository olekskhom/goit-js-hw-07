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

gallery.addEventListener('click', onModalClick)

function onModalClick(evt) {
    evt.preventDefault()

    
}



// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()
