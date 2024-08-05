let body = document.querySelector('body');
let logoImage = document.querySelector('.logo-image');
let header = document.querySelector(".primary-header-main");

console.log(logoImage);
document.addEventListener('DOMContentLoaded', () => logoImage.src = header ? 'assets/media/logo_light.png' : 'assets/media/logo.png');