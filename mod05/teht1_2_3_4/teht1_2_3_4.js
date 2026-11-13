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
        // console.log(data);
        return data;
    }
    catch(error) {
        console.error(`Jokin meni vikaan! ${error}`);
    }
}

async function load_tvmaze(evt) {
    const data = await fetch_tvmaze(evt);
    const results = document.querySelector("#results");
    console.log(data);
    for (let show of data) {
        
        const show_medium = show.show?.image?.medium;
        const show_name = show.show.name;
        const show_synopsis = show.show.summary;
        const show_link = show.show.url;

        const template = 
        
            `<article class="show_data">
                <p>-------------------------------</p>
                <img src="${show_medium}" alt="sarjan ${show_name} keskikokoinen kuva" class="medium">
                <h2 class="show_header" id="${show_name}">${show_name}</h2>
                <div class="show_synopsis">
                    <p>${show_synopsis}</p>
                </div>
                <a href="${show_link}" target="_blank">Lisätietoja</a>
            </article>`;
        
        const article = document.createElement("article");
        article.innerHTML = template;
        results.appendChild(article);
    }
}

const button_submit = document.querySelector("#submit");
button_submit.addEventListener("click", load_tvmaze);