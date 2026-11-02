"use strict";
const lista = document.createElement("div");
lista.innerHTML = (`
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
    `)

document.querySelector("#target").appendChild(lista);

document.querySelectorAll("li")[1].setAttribute("class", "my-item");