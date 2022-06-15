// const numberKm = parseInt('Quanti kilometri vuoi percorrere?');
// const userAge = parseInt('Quanti anni hai?');

const numberKm = document.getElementById('number-km').value;
const userAge = document.getElementById('user-age').value;
const submitButton = document.getElementById('submit-button');
const pricePerKm = 0.26;
let ticketPrice = (numberKm * pricePerKm);
let ticketPriceUnderage;
let ticketPriceOverage;

// // (Se) Prima condizione: minore di 18 anni
// if (userAge < 18) {
//     ticketPriceUnderage = ticketPrice - (ticketPrice * 15 / 100) + " €";
// }

// // (Altrimenti se) Seconda condizione: maggiore o uguale di 65 anni
// else if (userAge >= 65) {
//     ticketPriceOverage = ticketPrice - (ticketPrice * 35 / 100) + " €";
// }

submitButton.addEventListener('click', function () {

    console.log(document.getElementById('number-km').value);

    console.log(document.getElementById('user-age').value);

    let ticketPrice = (document.getElementById('number-km').value * pricePerKm);
    console.log(ticketPrice);

    let ticketPriceUnderage = ticketPrice - (ticketPrice * 15 / 100) + " €";
    console.log(ticketPriceUnderage);

    let ticketPriceOverage = ticketPrice - (ticketPrice * 35 / 100) + " €";
    console.log(ticketPriceOverage);

})