"use strict";
const list = document.querySelector("#target");

list.innerHTML = `
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
    `;

list.setAttribute("class", "my-list");