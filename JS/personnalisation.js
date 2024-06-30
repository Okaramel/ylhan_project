//Menu Burger
const MenuButton = document.querySelector('.menu-bouton');
const burgerMenu = document.querySelector('.burger-menu');
MenuButton.onclick = function() {
    burgerMenu.classList.toggle('openNav');
}

//Calcul
document.getElementById('burgerform').addEventListener('submit', function (event) {
    event.preventDefault();
    let total = 5;

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

    document.getElementById('prix_total').innerText = 'Le Prix total est :' + total.toFixed(2) + '€';
});