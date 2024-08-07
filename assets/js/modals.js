let modalWindow = document.querySelector('#modal-book');
let modalButton = document.querySelector('#modal-button-book');
let modalCloseBtn = document.querySelector('#modal-close-btn');
let form = document.querySelector('#modal-book form');
let successSubmit = document.querySelector('#success-submit');
let modalBackground = document.querySelector('#modal-book img');

modalButton.addEventListener("click", function modalManager() {
    modalWindow.classList.toggle('modal-show');
    body.classList.toggle('modal-opened');
    form.classList.remove('hide');
    modalBackground.classList.remove('hide');
    successSubmit.classList.remove('show');
    if (body.classList.contains('modal-opened')) {
        modalCloseBtn.addEventListener('click', modalManager);
    } else {   
        modalCloseBtn.removeEventListener('click', modalManager);
    }
});