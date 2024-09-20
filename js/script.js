// Sélection des éléments HTML
const redLight = document.getElementById('red-light');
const orangeLight = document.getElementById('orange-light');
const greenLight = document.getElementById('green-light');
const car = document.querySelector('.car');
const bicycle = document.querySelector('.bicycle');
const pedestrian = document.querySelector('.pedestrian');
const statusText = document.getElementById('status-text');
const button = document.getElementById('toggle-light');

// Initialisation de l'état du feu : rouge au début
let currentLight = 'red';

function updateTraffic() {
    // Remise à zéro des animations
    car.classList.remove('moving');
    bicycle.classList.remove('moving');
    pedestrian.classList.remove('moving');

    // Mise à jour en fonction de la couleur du feu
    if (currentLight === 'green') {
        // Feu vert : le piéton bouge, les autres s'arrêtent
        pedestrian.classList.add('moving');
        car.classList.add('hidden');
        bicycle.classList.add('hidden');
        greenLight.style.backgroundColor = 'green';
        redLight.style.backgroundColor = 'grey';
        orangeLight.style.backgroundColor = 'grey';
        statusText.textContent = 'Feu Vert : Le piéton traverse';
        statusText.style.color = 'green';
    } else if (currentLight === 'orange') {
        // Feu orange : la bicyclette bouge, les autres s'arrêtent
        bicycle.classList.add('moving');
        car.classList.add('hidden');
        pedestrian.classList.add('hidden');
        orangeLight.style.backgroundColor = 'orange';
        greenLight.style.backgroundColor = 'grey';
        redLight.style.backgroundColor = 'grey';
        statusText.textContent = 'Feu Orange : La bicyclette bouge';
        statusText.style.color = 'orange';
    } else {
        // Feu rouge : la voiture bouge, les autres s'arrêtent
        car.classList.add('moving');
        pedestrian.classList.add('hidden');
        bicycle.classList.add('hidden');
        redLight.style.backgroundColor = 'red';
        greenLight.style.backgroundColor = 'grey';
        orangeLight.style.backgroundColor = 'grey';
        statusText.textContent = 'Feu Rouge : La voiture bouge';
        statusText.style.color = 'red';
    }
}

// Change l'état du feu au clic sur le bouton
button.addEventListener('click', function() {
    if (currentLight === 'red') {
        currentLight = 'green';
    } else if (currentLight === 'green') {
        currentLight = 'orange';
    } else {
        currentLight = 'red';
    }
    updateTraffic();
});

// Mise à jour initiale
updateTraffic();
