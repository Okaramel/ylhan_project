//Menu Burger
//Ici on chercher des class pour prendre le bouton menu et le menu caché
const MenuButton = document.querySelector('.menu-bouton');
const burgerMenu = document.querySelector('.burger-menu');
// Le on click, c'est dès qu'on va appuyer sur le bouton.
MenuButton.onclick = function() {
// dès que je vais appuyer sur l'icon, la sidenav va s'ouvrir et dès qu'il rappuie, la sidenav se referme. On lui demande de reconnaître le bouton avec une class
    burgerMenu.classList.toggle('openNav');
}

//Code venant du site
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });