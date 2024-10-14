let currentLight = 0;
const lights = ['red', 'yellow', 'green'];

function changeLight() {
    const red = document.getElementById('red');
    const yellow = document.getElementById('yellow');
    const green = document.getElementById('green');

    red.classList.remove('active');
    yellow.classList.remove('active');
    green.classList.remove('active');

    if (lights[currentLight] === 'red') {
        red.classList.add('active');
    } else if (lights[currentLight] === 'yellow') {
        yellow.classList.add('active');
    } else {
        green.classList.add('active');
    }

    currentLight = (currentLight + 1) % lights.length;
}

setInterval(changeLight, 2000);
