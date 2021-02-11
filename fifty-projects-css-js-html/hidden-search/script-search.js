let search = document.querySelectorAll('.search');
let btn = document.querySelectorAll('.btn');
let input = document.querySelectorAll('.input');


btn.addEventListener('click', searchFunc());

    function searchFunc(){
    search.classList.toggle('active');
    input.focus();
}