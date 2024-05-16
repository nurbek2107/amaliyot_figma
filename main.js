const darkEL = document.getElementById('dark');
const body = document.body;
const header = document.getElementById('header');
const price = document.getElementById('price');
let isPlaying = localStorage.getItem('isPlaying') === 'true';
const cars = document.getElementById('cars');

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(countries => updation(countries));

function updation(countries) {


    const countryList = document.getElementById("cards");
    countries.forEach(element => {
        const listItem = document.createElement("div");
        listItem.classList.add("card");
        const currency = element.currencies ? element.currencies[Object.keys(element.currencies)[0]].name : "N/A";
        listItem.innerHTML = `
            <img src="${element.flags.png}"></img>
            <h2>${element.name.common}</h2>
            <p><strong>Capital:</strong> ${element.capital}</p>
            <p><strong>Area:</strong> ${element.area} square kilometers</p>
            <p><strong>Region:</strong> ${element.region}</p>
            <p><strong>Currency:</strong> ${currency}</p>
        `;
        countryList.appendChild(listItem);

        // Change background color and text color of listItem
        listItem.style.background = isPlaying ? "#2B3844" : "#fff";
        listItem.style.color = isPlaying ? "#fff" : "#000";
    });
    console.log(countries);
}

function toggleDarkMode() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        body.style.background = '#202C36';
        header.style.background = '#2B3844';
        header.style.color = "#fff";
        darkEL.innerHTML = '<i class="fa-solid fa-sun"></i>Light Mode';
        price.style.background = '#2B3844';
        price.style.color = '#fff';
        cars.style.background = '#2B3844';
        cars.style.color = '#fff';
    } else {
        body.style.background = '#f1f5f9';
        header.style.background = 'white';
        price.style.background = '#fff';
        header.style.color = "#000";
        cars.style.background = '#fff';
        cars.style.color = '#000';
        price.style.color = '#000';
        darkEL.innerHTML = '<i class="fa-regular fa-moon"></i>Dark Mode';
    }
    // Update background color and text color of all list items
    const listItems = document.querySelectorAll('.card');
    listItems.forEach(item => {
        item.style.background = isPlaying ? "#2B3844" : "#fff";
        item.style.color = isPlaying ? "#fff" : "#000";
    });

    localStorage.setItem('isPlaying', !isPlaying);
}

darkEL.addEventListener('click', toggleDarkMode);

toggleDarkMode();
