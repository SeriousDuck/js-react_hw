//? hw-26
// const wrap = document.querySelector('.wrapper');
 
// const container = document.createElement('div');
// const btnStart = document.createElement('button');
// const btnStop = document.createElement('button');

// container.classList.add('container');

// btnStart.innerText = 'Start Color Change';
// btnStop.innerText = 'Stop Color Change';

// container.append(btnStart, btnStop);
// wrap.append(container);

// var idColorInterval;

// function getRandomNumber() {
//     return Math.round(Math.random() * (255 - 0) + 0);
// }

// function getRandomColor() {
//     return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
// }

// function changeColorWithInterval() {
//     wrap.style.backgroundColor = getRandomColor();
// }

// btnStart.addEventListener('click', () => idColorInterval = setInterval(changeColorWithInterval, 2000));
// btnStop.addEventListener('click', () => clearInterval(idColorInterval));


//? hw-27
const wrap = document.querySelector('.wrapper');
const input = document.querySelector('.input');

const btn = document.createElement('button');

btn.innerText = 'Click Me';
wrap.append(btn);

let count = 0;

btn.addEventListener('click', () => {
    count++;
    input.value = `${count}`;
});