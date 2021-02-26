let hourEl = document.querySelectorAll('.hour');
let minuteEl = document.querySelectorAll('.minute');
let secondEl = document.querySelectorAll('.second');
let timeEl = document.querySelectorAll('.time');
let dateEl = document.querySelectorAll('.date');
let toggle = document.querySelectorAll('.toggle');


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    const html = document.querySelectorAll('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark mode';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Dark mode';
    }
})



