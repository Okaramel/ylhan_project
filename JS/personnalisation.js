//Menu Burger
const MenuButton = document.querySelector('.menu-bouton');
const burgerMenu = document.querySelector('.burger-menu');
MenuButton.onclick = function() {
    burgerMenu.classList.toggle('openNav');
}

//Calcul
//J'appelle le formulaire et je lui dit qu'au moment où on appuie sur le bouton submit il doit executer le reste du code
document.getElementById('burgerform').addEventListener('submit', function (event) {
    event.preventDefault();
    //Je pose un total
    let total = 5;

    //Je prends chaque catégorie et avec le prix que j'ai mit dans les value, j'aditionne avec le total que j'ai marqué au-dessus.
    const pain = document.querySelector('input[name="bread"]:checked');
    if (pain) {
        total += parseFloat(pain.value);
    }

    const viande = document.querySelector ('input[name="meat"]:checked');
    if (viande) {
        total += parseFloat(viande.value);
    }

    const ingredient1 = document.querySelector ('input[name="element1"]:checked');
    if (ingredient1) {
        total += parseFloat(ingredient1.value);
    }

    const ingredient2 = document.querySelector ('input[name="element2"]:checked');
    if (ingredient2) {
        total += parseFloat(ingredient2.value);
    }

    const ingredient3 = document.querySelector ('input[name="element3"]:checked');
    if (ingredient3) {
        total += parseFloat(ingredient3.value);
    }

    const boisson = document.querySelector ('input[name="drinks"]:checked');
    if (boisson) {
        total += parseFloat(boisson.value);
    }

    //Ici je vais chercher l'endroit où je vais mettre le texte qui va mettre le prix total quand on aura appuyer sur le bouton submit.
    document.getElementById('prix_total').innerText = 'Le Prix total est de ' + total.toFixed(2) + ' €.';
});