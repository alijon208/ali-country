let cards = document.getElementById('cards')
let darkMode = document.querySelector('.dark-mode');
let body = document.querySelector('body');

async function getData() {
    try {
        let response = await fetch("https://69284546b35b4ffc5014f1a3.mockapi.io/ali/country");
        if (!response.ok) {
            throw new Error("Tarmoqda xatolik")
        }

        let data = await response.json();

        data.forEach(country => {
            cards.innerHTML += `
        <div class="card">
            <img src="${country.img}" alt="img">
            <h1>${country.name}</h1>
            <h3>Population: ${country.population}</h3>
            <h3>Region: ${country.region}</h3>
            <h3>Capital: ${country.capital}</h3>
        </div>
            `
        });
    }
    catch (error) {
        console.error('Xato' + error);
    }
}
getData();

darkMode.addEventListener('click', () => {
    body.classList.toggle('body-dark')
});