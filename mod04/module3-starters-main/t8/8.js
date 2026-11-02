"use strict";

function laske() {
    let valinta = document.querySelector("#operation").value;
    let num1 = +document.querySelector("#num1").value;
    let num2 = +document.querySelector("#num2").value;
    if (valinta == "add") {
        document.querySelector("#result").innerHTML = (num1 + num2);
    }
    if (valinta == "sub") {
        document.querySelector("#result").innerHTML = (num1 - num2);
    }
    if (valinta == "multi") {
        document.querySelector("#result").innerHTML = (num1 * num2);
    }
    if (valinta == "div") {
        document.querySelector("#result").innerHTML = (num1 / num2);
    }
}