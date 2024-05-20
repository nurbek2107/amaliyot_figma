const darkEL = document.getElementById('dark');
const body = document.body;
const header = document.getElementById('header');
const price = document.getElementById('price');
const cars = document.getElementById('cars');
let isPlaying = localStorage.getItem('isPlaying') === 'true';

function toggleDarkMode() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        darkEL.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
        body.style.background = '#202C36';
        header.style.background = '#2B3844';
        header.style.color = "#fff";
        price.style.background = '#2B3844';
        price.style.color = '#fff';
        cars.style.background = '#2B3844';
        cars.style.color = '#fff';
        
    } else {
        darkEL.innerHTML = '<i class="fa-regular fa-moon"></i> Dark Mode';
        body.style.background = '#f1f5f9';
        header.style.background = 'white';
        header.style.color = "#000";
        price.style.background = '#fff';
        price.style.color = '#000';
        cars.style.background = '#fff';
        cars.style.color = '#000';
    }

    const listItems = document.querySelectorAll('.card');
    listItems.forEach(item => {
        item.style.background = isPlaying ? "#2B3844" : "#fff";
        item.style.color = isPlaying ? "#fff" : "#000";
    });

    localStorage.setItem('isPlaying', isPlaying);  // Corrected the value stored in localStorage
}

darkEL.addEventListener('click', toggleDarkMode);

if (isPlaying) {
    toggleDarkMode();  // Apply dark mode styles if isPlaying is true on initial load
}

