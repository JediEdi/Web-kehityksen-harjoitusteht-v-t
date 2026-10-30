"use strict";
const numerot = [];

let annettu_luku = prompt("Kirjoita luku. Kirjoita 0, jos haluat tulostaa listan.");

while (annettu_luku != 0) {
    numerot.push(annettu_luku);
    annettu_luku = prompt("Kirjoita luku. Kirjoita 0, jos haluat tulostaa listan.");
};

numerot.sort((a, b) => b - a);

console.log(numerot);