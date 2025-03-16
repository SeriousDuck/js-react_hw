//? hw-11
// 1
// const numbers = [
//     12, -45, 67, -3, 89, -90, 23, 5, -22, 56, 43, -78, 
//     91, -10, 38, 62, -41, 7, -99, 34, 55, -60, 14, 80
// ];

//* 1
// let totalPositiveNum = 0;
// let count = 0;

// for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//         totalPositiveNum += numbers[i];
//         count++;
//     }
// }
// console.log(`Total positive num ${count}, them count ${totalPositiveNum}`);

//* 2
// let smalestNum = 0;
// let minIndex = 0;

// for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] < smalestNum) {
//         smalestNum = numbers[i];
//         minIndex = i;
//     }
// }
// console.log(`Smalest num ${smalestNum}, them index ${minIndex}`);

//* 3
// let maxNum = 0;
// let maxIndex1 = 0;

// for (i = 1; i < numbers.length; i++) {
//     if (numbers[i] > maxNum) {
//         maxNum = numbers[i];
//         maxIndex1 = i;
//     }
// }
// console.log(`Largest num ${maxNum}, them index ${maxIndex1}`);

//* 4
// let negativeNum = 0;
// let count = 0;

// for (i = 1; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//         num += numbers[i];
//         count++;
//     }
// }
// console.log(`Total negative num ${negativeNum}, them count ${count}`);

//* 5 - 8
// 5️ - Count the number of odd positive numbers in the array.
// 8️ - Find the sum of all odd positive numbers.

// let num = 0;
// let count = 0;

// for (i = 1; i < numbers.length; i++) {
//     if (numbers[i] > 0 && numbers[i] % 2) {
//         num += numbers[i];
//         count++;
//     }
// }
// console.log(`Result num ${num}, them count ${count}`);

//* 6 - 7 
// 6️ - Count the number of even positive numbers in the array.
// 7️ - Find the sum of all even positive numbers.

// let num = 0;
// let count = 0;

// for (i = 1; i < numbers.length; i++) {
//     if (numbers[i] > 0 && numbers[i] % 2 === 0) {
//         num += numbers[i];
//         count++;
//     }
// }
// console.log(`Result num ${num}, them count ${count}`);


//* 9
// const multiplyPositiveNum = numbers.filter(num => num > 0);
// const sum = multiplyPositiveNum.reduce((a, b) => a * b, 0);
// console.log(sum);

// let num = 1;
// let count = 0;

// for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//         num *= numbers[i];
//         count++;
//     }
// }
// console.log(`Result num ${num}, them count ${count}`);

//* 10
// const maxNumArr = numbers.reduce((max, num) => (num > max ? num : max), 0);
// const result = numbers.map(num => num === maxNumArr ? num : 0);
// console.log(result);

// let maxNum = 0;

// for (i = 0; i < numbers.length; i++) {
//     // if (numbers[i] > maxNum) {
//     //     maxNum = numbers[i];
//     // } else if (numbers[i] !== maxNum) {
//     //     numbers[i] = 0;
//     // }

//     if (numbers[i] > maxNum) {
//         maxNum = numbers[i];
//     } 

//     for (i = 0; i < numbers.length; i++) {
//         if (numbers[i] !== maxNum) {
//             numbers[i] = 0;
//         }
//     }
// }
// console.log(numbers);



//? hw-12

// const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// const colorList = [];

// const hero = ['Ivan']; 
// const native = ['York', 'Of'].reverse(); 
// const destination = ['Poltava', 'In'].reverse();

// const rainbow = [].concat(hero, native, destination);

// rainbow.splice(0, 1, 'Richard');
// rainbow.splice(3, 0, 'Gave', 'Battle');
// rainbow.splice(-1, 1, 'Vain')

// for (i = 0; i < colors.length; i++) {
//     const colorItem = `<p class="box-color" style="background-color: ${colors[i]}"></p>`;
//     colorList.push(colorItem, rainbow[i]);
// }

// document.write(
//     `
//         <div class="wrapper">
//             ${colorList.join('')}
//         </div>
//     `
// );

//? hw-13

// const sports = [
//     ['skier', '⛷'],
//     ['snowboarder', '🏂'],
//     ['apple', '🍎'],
//     ['hockey', '🏒'],
//     ['ice skate', '⛸'],
//     ['swimmer', '🏊'],
//     ['surfer', '🏄‍'],
//     ['watermelon', '🍉'],
//     ['lemon', '🍋'],
//     ['rowboat', '🚣'],
//     ['bicyclist', '🚴‍']
// ];


// const winter_sports = sports.slice(0, 2).concat(sports.slice(3, 5));
// const summer_sports = sports.slice(5, 7).concat(sports.slice(-2));
// const fruits = sports.slice(2, 3).concat(sports.slice(7, -2));

// console.log(winter_sports);
// console.log(summer_sports);
// console.log(fruits);
