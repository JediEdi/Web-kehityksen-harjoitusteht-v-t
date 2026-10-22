"use strict";
const luku1_str = prompt("Ole hyvä ja kirjoita ensimmäinen luku");
const luku2_str = prompt("Ole hyvä ja kirjoita toinen luku");
const luku3_str = prompt("Ole hyvä ja kirjoita kolmas luku");

const luku1 = parseInt(luku1_str);
const luku2 = parseInt(luku2_str);
const luku3 = parseInt(luku3_str);

const summa = luku1 + luku2 + luku3
const tulo = luku1 * luku2 * luku3
const keskiarvo = (luku1 + luku2 + luku3) / 3

document.querySelector("#luvut").innerHTML = luku1_str + ", " + luku2_str + ", " + luku3_str
document.querySelector("#vastaukset").innerHTML = "Summa: " + summa + " Tulo: " + tulo + " Keskiarvo: " + keskiarvo