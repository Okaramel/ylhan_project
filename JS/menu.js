var lightbox = new SimpleLightbox('.gallery', { /* options */ });
var lightbox = $('.gallery').simpleLightbox({ /* options */ });

//Menu Burger
const MenuButton = document.querySelector('.menu-bouton');
const burgerMenu = document.querySelector('.burger-menu');
MenuButton.onclick = function() {
    burgerMenu.classList.toggle('openNav');
}