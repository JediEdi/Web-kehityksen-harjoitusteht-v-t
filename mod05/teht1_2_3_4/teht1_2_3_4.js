"use strict";

async function fetch_tvmaze(evt) {
    evt.preventDefault(); // todella TODELLA   T O D E L L A   tärkeä
    const value_from_input = document.querySelector("#query").value;
    try {
        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${value_from_input}`
        );
        if (!response.ok) {
            throw new Error(`HTTP virhe! ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error) {
        console.error(`Jokin meni vikaan! ${error}`);
    }
}

const button_submit = document.querySelector("#submit");
button_submit.addEventListener("click", fetch_tvmaze);