"use strict";
function even(taulukko) {
    let taulukko_even = [];
    for (let index = 0; index <= taulukko.length - 1; index++) {
        if (taulukko[index] % 2 == 0) {
            taulukko_even.push(taulukko[index]);
        };
    };
    return taulukko_even;
};

const luvut = [1, 4, 7, 3, 12, 9, 5, 6, 26, 1.5, 7000];
console.log("Kaikki luvut: " + luvut)
console.log("Parilliset: " + even(luvut))