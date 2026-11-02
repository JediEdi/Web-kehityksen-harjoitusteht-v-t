'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let i of names) {
    const lista = document.createElement("li");
    const nimi = document.createTextNode(i);
    lista.appendChild(nimi);
    document.querySelector("#target").appendChild(lista);
}
