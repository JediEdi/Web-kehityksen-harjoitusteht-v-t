"use strict";
const osallistujat_lukumaara = prompt("Kuinka monta osallistujaa haluat?")
const osallistujat = [];

for (let luku = 1; luku <=osallistujat_lukumaara; luku++) {
    osallistujat.push(prompt(`Kirjoita listan ${luku}. osallistuja.`));
};

osallistujat.sort();

for (const osallistuja of osallistujat) {
    const esine = document.createElement("li");
    esine.appendChild(document.createTextNode(osallistuja));
    document.querySelector("#osallistujat").append(esine);
};