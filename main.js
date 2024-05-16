// fetch("https://restcountries.com/v3.1/all").then((data) => {
//     return data.json();
// })
//     .then((countires) => {
//         updation(countires)
//     })
// function updation(countires) {
//         countires.forEach(element => {
//             console.log(element.name)
//         });
//     }

const darkEL = document.getElementById('dark');
const body = document.body;
const header = document.getElementById('header');
const price = document.getElementById('price');
let isPlaying = localStorage.getItem('isPlaying') === 'true';

function toggleDarkMode() {
    if (isPlaying) {
        body.style.background = '#202C36';
        header.style.background = '#2B3844';
        header.style.color = "#fff";
        darkEL.innerHTML = '<i class="fa-solid fa-sun"></i>Light Mode';
        price.style.background = '#2B3844';
        price.style.color = '#fff';

    } else {
        body.style.background = '#f1f5f9';
        header.style.background = 'white';
        price.style.background = '#fff';
        header.style.color = "#000";
        price.style.color = '#000';
        darkEL.innerHTML = '<i class="fa-regular fa-moon"></i>Dark Mode';
    }
    localStorage.setItem('isPlaying', isPlaying);
}

darkEL.addEventListener('click', () => {
    isPlaying = !isPlaying;
    toggleDarkMode();
});

toggleDarkMode();