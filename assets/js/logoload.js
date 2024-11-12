let body = document.querySelector('body');
let logoImage = document.querySelector('.logo-image');
let header = document.querySelector(".primary-header-main");

document.addEventListener('DOMContentLoaded', () => logoImage.src = header ? 'assets/media/logo_light.webp' : 'assets/media/logo.webp');