"use strict";
const numerot = [];
for (let luku = 1; luku <=5; luku++) {
    numerot.push(prompt(`Kirjoita listan ${luku}. luku.`));
};

for (let luku = 5; luku >=0; luku--) {
    console.log(numerot[luku]);
};