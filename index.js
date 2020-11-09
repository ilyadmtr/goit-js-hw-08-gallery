import gallery from "./gallery-items.js";
const listGallery = document.querySelector('.js-gallery')
const lightbox = document.querySelector('.lightbox')
const lightboxImage = document.querySelector('.lightbox__image')
const closeLightbox = document.querySelector('.lightbox__button')
const lightboxOverlay = document.querySelector('.lightbox__overlay')

listGallery.addEventListener('click', (event)=>{
  event.preventDefault()
  lightbox.classList.add('is-open')
  const modalImageSrc = event.target.dataset.source
  lightboxImage.setAttribute('src', modalImageSrc)
})

lightboxOverlay.addEventListener('click',()=>{
  lightbox.classList.remove('is-open');
})
closeLightbox.addEventListener('click', ()=>{
  lightbox.classList.remove('is-open')
})


console.log(gallery)

gallery.map((obj, i, arr)=>{
console.log(obj);
const imgPreviewGallery = document.createElement('img')
imgPreviewGallery.setAttribute('src', obj.preview);
imgPreviewGallery.setAttribute('alt', obj.description)
imgPreviewGallery.classList.add('gallery__image')
imgPreviewGallery.setAttribute('data-source', obj.original)
imgPreviewGallery.setAttribute('data-value', i)
console.log(imgPreviewGallery)

const linkGallery = document.createElement('a')
linkGallery.classList.add('gallery-link')
linkGallery.setAttribute('href', obj.original )

linkGallery.appendChild(imgPreviewGallery)


const galleryItem = document.createElement('li')
galleryItem.classList.add('gallery__item')

galleryItem.appendChild(linkGallery)
console.log(galleryItem);

listGallery.appendChild(galleryItem)

})

