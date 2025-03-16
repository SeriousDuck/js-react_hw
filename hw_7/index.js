// create element
const wrapper = document.querySelector('.wrapper');

// adding value element
wrapper.classList.add('wrapper');

const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const num = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// const faceCards = ["J", "Q", "K"];
// const ace = ["A"];

const table = [];

for (let suitCounter = 0; suitCounter < suits.length; suitCounter++) {
    for (let numCounter = 0; numCounter < num.length; numCounter++) {

        // console.log(num[numCounter] + suits[suitCounter]);
        
        const card = document.createElement('div');
        const card__info = document.createElement('div');
        const card__person = document.createElement('div');
        const person = document.createElement('img');

        card.classList.add('card');
        card__info.classList.add('card__info');
        card__person.classList.add('card--person');
        person.classList.add('person');

        // table.push(num[numCounter] + suits[suitCounter]);

        person.src = `images/${suits[suitCounter]}.svg`;
        card__info.innerText = num[numCounter];
        
        card__person.append(person);
        card.append(card__info, card__person);
        wrapper.append(card);
    }
}
// console.log(table);

