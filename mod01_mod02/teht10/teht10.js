"use strict";
function randomint(min, max) {
    // const min = Math.ceil(min)
    // const max = Math.floor(max)
    return Math.floor(Math.random() *  (max - min + 1) + min);
}

const noppien_lukumaara = prompt("Kuinka monta noppaa haluat heittää?\n(Kokonaisluku)");
document.querySelector("#noppien_lukumaara").innerHTML = "Lukumäärä: " + noppien_lukumaara

const kohde_summa = prompt("Aiomme laskea, kuinka suurella todennäköisyydellä antamasi summa ilmestyy heitettäessä noin monta noppaa. \nMinkä summan todennäköisyyden haluat laskea?\n(Kokonaisluku)")
document.querySelector("#kohde_summa").innerHTML = "Tahdottu summa: " + kohde_summa

let summa = 0
let onnistumiset = 0

for (let heitto = 1; heitto <= 10000; heitto++) {
    // console.log("setti: " + heitto)
    summa = 0
    for (let noppa = 1; noppa <= noppien_lukumaara; noppa++) {
        // console.log("heitetään noppa nro." + noppa)
        // console.log("ennen:" + summa)
        summa = summa + randomint(1, 6)
        // console.log("jäljeen:" + summa) 
    }
    if (summa == kohde_summa) {
        onnistumiset = onnistumiset + 1
        // console.log ("onnistui")
    }
    }

// console.log("onnistumiset: " + onnistumiset)

document.querySelector("#summan_todennakoisyys").innerHTML = "Todennäköisyys saada silmälukujen summaksi " + kohde_summa + " kun heitetään " + noppien_lukumaara + " noppaa: ~" + Number.parseFloat(onnistumiset / 10000 * 100).toFixed(2) + "%"