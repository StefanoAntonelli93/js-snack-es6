'use strict';
console.log('ok');


const bike = [
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


// arrow function forEach
const result = bike.forEach((element, i, array) => {
    console.log(element, i, array);
});

