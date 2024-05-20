'use strict';
console.log('ok');


const bikes = [
    {
        nome: 'Specialized',
        peso: 3000,
    },
    {
        nome: 'Felt',
        peso: 3200,
    },
    {
        nome: 'Focus Bike',
        peso: 3250,
    },
    {
        nome: 'Giant',
        peso: 3450,
    },
    {
        nome: 'Kona',
        peso: 2850,
    },
    {
        nome: 'Bergamont',
        peso: 2960,
    },
    {
        nome: 'Cannondale',
        peso: 3100,
    },
    {
        nome: 'BMC',
        peso: 3001,
    },
];


// creo una variabile di partenza (biciLeggera)
let biciLeggera = bikes[0];
console.log(biciLeggera);


// arrow function forEach
const result = bikes.forEach((bike, i, array) => {
    console.log(bike, i, array);
    const biciAttuale = bikes[i];
    if (biciAttuale.peso < biciLeggera.peso) {
        biciLeggera = biciAttuale;
    }
});
console.log(`La bici più leggera è: ${biciLeggera.nome}`);



// come accedere a un elemento specifico di un oggetto dentro array
// console.log(bike[1].peso);


// for of
// for ( let nome of bike) {
//     console.log(nome);
// }
