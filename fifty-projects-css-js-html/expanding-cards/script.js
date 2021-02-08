// change active panel
const panels = document.querySelectorAll('.panel')


// cards changing
// forEach() - выполняет указанную функцию один раз для каждого элемента в селекторе
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})
/*По умолчанию первое изображение было 'panel active',
  теперь при клике на другое к 'panel' прибавляется 'active',
    а у предыдущего изображения наоборот удаляется 'active'*/

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}