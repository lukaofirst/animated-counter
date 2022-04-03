// DOM Element's
const counters = document.querySelectorAll('.counter');

/*** Using forEach() ***/

/*

counters.forEach((counter) => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const divider = 5000;
        const speed = 1000;

        const inc = target / divider;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, speed);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

*/

/*** Same functionality, now using for...of ***/

for (let n of counters) {
    const updateCount = () => {
        const target = +n.getAttribute('data-target');
        const count = +n.innerText;
        const divider = 5000;
        const speed = 1000; // 1000 millisecond => 1 second;

        const inc = target / divider;

        if (count < target) {
            n.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, speed);
        } else {
            n.innerText = target;
        }
    };

    updateCount();
}
