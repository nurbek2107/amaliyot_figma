const darkEL = document.getElementById('dark');
const body = document.body;
const header = document.getElementById('header');
const price = document.getElementById('price');
const cars = document.getElementById('cars');
let isPlaying = localStorage.getItem('isPlaying') === 'true';

function applyDarkModeStyles() {
    darkEL.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
    body.style.background = '#202C36';
    header.style.background = '#2B3844';
    header.style.color = "#fff";
}
function applyLightModeStyles() {
    darkEL.innerHTML = '<i class="fa-regular fa-moon"></i> Dark Mode';
    body.style.background = '#f1f5f9';
    header.style.background = 'white';
    header.style.color = "#000";
}
function toggleDarkMode() {
    isPlaying = !isPlaying;
    localStorage.setItem('isPlaying', isPlaying);
    if (isPlaying) {
        applyDarkModeStyles();
    } else {
        applyLightModeStyles();
    }
}
darkEL.addEventListener('click', toggleDarkMode);
if (isPlaying) {
    applyDarkModeStyles();  
} else {
    applyLightModeStyles(); 
}
