const switchHeader = document.querySelector('.primary-header');
const headerFluid = document.querySelector('.primary-header-fluid');
let isMainHeader = header ? true : false;
headerFluid.style.height = `${switchHeader.offsetHeight}px`;

let lastCoords = 0;
let touchesCount = 0;

function elementToggle(elem, currentCoords) {
    console.log(currentCoords, isMainHeader);
    touchesCount += 1;
    if (!elem.classList.contains('hide') && currentCoords > elem.offsetHeight && currentCoords > lastCoords && touchesCount > 10) {
        elem.classList.add('hide');
        touchesCount = 0;
    } else if (elem.classList.contains('hide') && currentCoords < lastCoords && touchesCount > 10) {
        elem.classList.remove('hide');
        if (isMainHeader) {
            elem.classList.remove('primary-header-main');
            logoImage.src = "assets/media/logo.webp";
            header = null;
        }
        touchesCount = 0;
    } else if (currentCoords == 0 && isMainHeader) {
        elem.classList.add('primary-header-main');
        logoImage.src = "assets/media/logo_light.webp";
        header = document.querySelector('.primary-header-main');
        touchesCount = 0;
    }
    lastCoords = currentCoords;
}

document.addEventListener('scroll', () => elementToggle(switchHeader, window.scrollY));