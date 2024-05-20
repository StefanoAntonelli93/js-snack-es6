'use strict';

// creo un array di oggetti (teams)
const teams = [
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0,
    }
]


// creo numero random di due cifre
let min = 10;
let max = 100;
let randomNumberPf= Math.floor(Math.random() * (max - min)) + min;
let randomNumberFs= Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNumber);
// creo nuovo array modificato con map e arrow function

const teamsMod = teams.map((element, index, array) => {
    return {
        // nome: element.nome,
        ...element, //zucchero sintattico PRENDE TUTTI I VALORI DI UN OGGETTO
        puntiFatti: randomNumberPf,
        falliSubiti: randomNumberFs,
    }
});
console.log(teamsMod);

const result =  teamsMod.map ((element) => {
    return {
        nome: element.nome,
        falliSubiti: element.falliSubiti,
    }
});
console.log(result);