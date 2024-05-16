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
let isPlaying = true;

darkEL.addEventListener('click', () => {
    if (isPlaying) {
        body.style.background = '#202C36';
        header.style.background = '#2B3844';
        header.style.color = "#fff";
    } else {
        body.style.background = 'white';
        header.style.background = 'white';
        header.style.color = "#000";

    }
    isPlaying = !isPlaying;
});
