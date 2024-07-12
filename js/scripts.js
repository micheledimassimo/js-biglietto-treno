// Prezzo per KM in euro
const ppKM = 0.21;
console.log('Prezzo per km in euro:', ppKM);


//Chiedo all'utente quanti hanni ha
const age = prompt('Qual è la tua età?');
console.log('Anni:', age);

//Chiedo all'utente quanti km deve percorrere
const route = prompt('Quanti KM devi percorrere?');
console.log('KM da percorrere:', route);

let price = ppKM * route;
console.log('Prezzo:', price);

//va applicato uno sconto del 20% per i minorenni

if (age < 18) {
    price = (price - (price * 0.2)).toFixed(2);
    console.log('Prezzo con 20% sconto: €', price);
    document.getElementById('ticket-price').innerHTML = price;
}

//prezzo normale
if (age >= 18 && age < 65) {
    price = price.toFixed(2);
    console.log('Prezzo: €', price);
    document.getElementById('ticket-price').innerHTML = price;
}

if (age >= 65) {
    price = (price - (price * 0.4)).toFixed(2);
    console.log('Prezzo con 40% sconto: €', price);
    document.getElementById('ticket-price').innerHTML = price;
}
//va applicato uno sconto del 40% per gli over 65.