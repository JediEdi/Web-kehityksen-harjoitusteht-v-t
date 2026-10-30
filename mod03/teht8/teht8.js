"use strict";
function concat(taulukko) {
    let taulukko_concat = "";
    for (let nimi = 0; nimi <= taulukko.length - 1; nimi++) {
        taulukko_concat += (taulukko[nimi]);
    };
    return taulukko_concat;
};

const nimet = ["Johnny", "DeeDee", "Joey", "Marky"];
document.querySelector("#concatettu").innerHTML = concat(nimet);