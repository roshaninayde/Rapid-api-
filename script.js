const apiKey = 'ac0c7c04d0msh268b7f722dd8ef7p144074jsn674fe00fa682';
let moviesData; 


function showData() {
    if (!Array.isArray(moviesData)) return; 
    const mainDiv = document.querySelector('.main');
    mainDiv.innerHTML = '';

    moviesData.forEach(movie => {
        const div = document.createElement("div");
        div.className = "container";

        const img = document.createElement("img");
        img.src = movie.image;
        img.alt = movie.title;

        const rating = document.createElement("h2");
rating.innerText = movie.rating;


        const movieName = document.createElement("h2");
        movieName.innerText = movie.title;

        div.appendChild(img);
        div.appendChild(rating);
        div.appendChild(movieName);

        mainDiv.appendChild(div);
    });
}

document.getElementById('fetchButton').addEventListener('click', async () => {
    const url = `https://imdb-top-100-movies.p.rapidapi.com/?rapidapi-key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        moviesData = await response.json();
        console.log(moviesData); 
        showData();
    } catch (error) {
        console.error(error);
        alert('Failed to fetch data. Please try again later.');
    }
});

function showStoredData() {
    console.log(3);
    let movie = JSON.parse(localStorage.getItem("movie"));
    let html = `
        <h1>${movie.title}</h1>
        <img src="${movie.image}">
        <p>${movie.description}</p>
    `;
    document.body.innerHTML = html;
}

window.addEventListener("DOMContentLoaded", showStoredData);