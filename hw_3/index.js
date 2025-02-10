//? hw-5
// const num1 = +prompt("Write first number");
// const num2 = +prompt("Write second number");
// const num3 = +prompt("Write third number");
// const average = (num1 + num2 + num3) / 3;
// alert(average);

//? hw-6
// 1
// const yearOfBirth = +prompt("Write your year of birth");
// const city = prompt("Write your city");
// const sportChamp = prompt("Write your favourite sport");

// const nowDate = new Date();
// const birth = nowDate.getFullYear();

// const userAge = birth - yearOfBirth;
// const ageMsg = (`Your age: ${userAge}`);

// if (yearOfBirth === null) {
//     alert("Too bad you didn't want to enter your year of birth.");
// } else {
//     alert(ageMsg)
// }

// if (city === 'Kyiv') {
//     alert(`You live in the capital of Ukraine,  where Ukraine is the country of the entered city`);
// } else if (city === 'Washington') {
//     alert(`You live in the capital of USA,  where USA is the country of the entered city`);
// } else if (city === 'London') {
//     alert(`You live in the capital of GB,  where GB is the country of the entered city`);
// } else if (city === null) {
//     alert("Too bad you didn't want to enter your city.");
// } else {
//     alert(`You live in ${city}`);
// }

// if (sportChamp === 'Box') {
//     alert("Cool! Do you want to become like Roy Jones? Where Roy Jones is a well-known athlete in that sport.");
// } else if (sportChamp === 'Tenis') {
//     alert("Cool! Do you want to become like Jannik Sinner? Where Jannik Sinner is a well-known athlete in that sport.");
// } else if (sportChamp === 'UFC') {
//     alert("Cool! Do you want to become like Anthony Ferguson? Where Anthony Ferguson is a well-known athlete in that sport.");
// } else if (sportChamp === null) {
//     alert("Too bad you didn't want to enter your sport.");
// }

//? hw-7
const userInput = prompt("Enter a value:");

switch (true) {
    case userInput === null:
        console.log("Input was canceled.");
        break;
    case userInput.trim() === "":
        console.log("You entered an empty string.");
        break;
    case isNaN(+userInput):
        console.log("This is not a number.");
        break;
    default:
        console.log("Valid number entered!");
};