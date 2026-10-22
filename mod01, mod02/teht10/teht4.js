"use strict";
function randomint(min, max) {
    // const min = Math.ceil(min)
    // const max = Math.floor(max)
    return Math.floor(Math.random() *  (max - min + 1) + min);
}

const noppien_lukumaara = prompt("Kuinka monta noppaa haluat heittää?\n(Kokonaisluku)");
const kohde_summa = prompt("Aiomme laskea, kuinka suurella todennäköisyydellä antamasi summa ilmestyy heitettäessä noin monta noppaa. Minkä summan todennäköisyyden haluat laskea?\n(Kokonaisluku)")

for (let heitto = 1; heitto <= 10000; heitto++) {
    for (noppa = 1; noppa <= noppien_lukumaara; noppa++) {
        
    }
}