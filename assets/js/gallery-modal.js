let galleryWindow = document.querySelector('#modal-gallery');
let galleryButton = document.querySelector('#open-gallery');
let mainContent = document.querySelector('main');
const modalSpaceFluid = document.querySelector('.modal-gallery-space-fluid');
const galleryCloseButton = document.querySelector('#gallery-close-btn')

galleryButton.addEventListener('click', function toggleGallery() {

    galleryWindow.classList.remove('modal-fluid-hide')
    galleryWindow.classList.toggle('modal-fluid-show');

    
    if (galleryWindow.classList.contains('modal-fluid-show')) {
        modalSpaceFluid.style.height = galleryWindow.offsetHeight + 1 + 'px';
        modalSpaceFluid.classList.toggle('active');
        galleryCloseButton.addEventListener('click', toggleGallery);

        setTimeout(() => {
            mainContent.classList.toggle('hide-content');
            modalSpaceFluid.classList.toggle('show');
            

        }, 1000); 
        
    } else {
        mainContent.classList.toggle('hide-content');
        modalSpaceFluid.classList.toggle('active');
        modalSpaceFluid.classList.toggle('show');
        galleryWindow.classList.add('modal-fluid-hide')
        galleryCloseButton.removeEventListener('click', toggleGallery);
    }
    
});