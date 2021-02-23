let counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0'

    let updateCounter = () => {
        let target = +counter.getAttribute('data-target');
        let c = +counter.innerText;

        let increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 6);
        } else {
            counter.innerText = target
        }
    }
    updateCounter();
})