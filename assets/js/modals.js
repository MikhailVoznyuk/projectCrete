let modalWindow = document.querySelector('#modal-book');
let modalButton = document.querySelector('#modal-button-book');
let modalCloseBtn = document.querySelector('#modal-close-btn');

modalButton.addEventListener("click", function modalManager() {
    modalWindow.classList.toggle('modal-show');
    body.classList.toggle('modal-opened');
    if (body.classList.contains('modal-opened')) {
        modalCloseBtn.addEventListener('click', modalManager);
    } else {
        modalCloseBtn.removeEventListener('click', modalManager);
    }
});