//? hw-15
// const array = [1, 2, 3, 4, 5, 6, 7];

// function deleteElement (arr, item) {
//     return arr.filter(el => el !== item);
    
// }
// console.log(deleteElement(array, 5));

//? hw-16
// function sum () {
//     let result = 0;

//     return function (num) {
//         result += num;
//         return result;
//     }
// }
  
// const add = sum();

// console.log(add(3));  // Output: 3
// console.log(add(5));  // Output: 8
// console.log(add(20)); // Output: 28

//? hw-17

const array = [
    [
      ['some text', true, [1, 2, 3, 4, [10, 20]]],
    ],
    [
      [1, 2, 3, [100, 200]],
      ['name', 'age']
    ],
  ];

function deepClone (arr) {
    const cloneArr = [];

    for (i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const secondCloneArr = [];
            for (j = 0; j < arr[i].length; j++) {
                secondCloneArr.push(arr[i][j]);
            }

            cloneArr.push(secondCloneArr);

        } else {
            cloneArr.push(arr[i]);
        }
    }
    return cloneArr;
    // console.log(cloneArr);

}

const copiedArr = deepClone(array);

// array[1][1] = 11111;

console.log(copiedArr); // Should return a full deep copy of `array`
console.log(copiedArr  === array); // Should be false (ensuring a new copy is created)
// console.log(array);