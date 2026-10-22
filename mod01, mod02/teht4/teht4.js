"use strict";
function randomint(min, max) {
    // const min = Math.ceil(min)
    // const max = Math.floor(max)
    return Math.floor(Math.random() *  (max - min + 1) + min);
}

const nimi = prompt("Mikä on nimesi?");

let tupa = ""

const luku = randomint(1, 4);
if (luku == 1) {
    tupa = "Rohkelikko"}
else if (luku == 2) {
    tupa = "Puuskupuh"}
else if (luku == 3) {
    tupa = "Korpinkynsi"}
else if (luku == 4) {
    tupa = "Luihuinen"}
else {
    tupa = "ERROR!"
    console.log("Luku ei ole 1, 2, 3 tai 4.")};

document.querySelector("#valinta").innerHTML = nimi + ", sinä olet " + tupa