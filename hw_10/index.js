//? hw-19
// const users = [
//     {
//       "index": 0,
//       "isActive": true,
//       "balance": "$2,340.50",
//       "name": "Sophia Mitchell",
//       "gender": "female",
//       "phone": "+1 (810) 456-7890",
//       "address": "112 Maple Street, Portland, Maine, 04101"
//     },
//     {
//       "index": 1,
//       "isActive": false,
//       "balance": "$1,892.30",
//       "name": "Liam Anderson",
//       "gender": "male",
//       "phone": "+1 (923) 555-1122",
//       "address": "224 Ocean Drive, Miami, Florida, 33139"
//     },
//     {
//       "index": 2,
//       "isActive": true,
//       "balance": "$4,102.80",
//       "name": "Olivia Carter",
//       "gender": "female",
//       "phone": "+1 (756) 678-9901",
//       "address": "345 Pine Avenue, Seattle, Washington, 98101"
//     },
//     {
//       "index": 3,
//       "isActive": true,
//       "balance": "$3,475.20",
//       "name": "Noah Thompson",
//       "gender": "male",
//       "phone": "+1 (890) 234-5678",
//       "address": "786 Sunset Boulevard, Los Angeles, California, 90028"
//     },
//     {
//       "index": 4,
//       "isActive": false,
//       "balance": "$2,764.15",
//       "name": "Emma Brown",
//       "gender": "female",
//       "phone": "+1 (671) 999-4433",
//       "address": "981 River Road, Austin, Texas, 73301"
//     },
//     {
//       "index": 5,
//       "isActive": true,
//       "balance": "$1,523.45",
//       "name": "James Wilson",
//       "gender": "male",
//       "phone": "+1 (345) 666-7899",
//       "address": "567 Park Lane, Denver, Colorado, 80203"
//     }
//   ];

// // converted "balance" from strings into numbers 
// const convertBalance = balance => {
//     const number = balance.split('$').join('').split(',').join('');
//     return +(number);
// };

// const richUser = users
//   .filter(user => convertBalance(user.balance) > 2000)
//   .map(user => user.phone);

// const totalBalance = users 
//     .map(user => convertBalance(user.balance))
//     .reduce((accum, current) => accum + current, 0);

// // округляю число
// const convertTotalBalance = Math.round(totalBalance * 100);

//     console.log(richUser);
//     console.log(convertTotalBalance);


//? hw-20
const obj = {
    x: 10,
    y: 20,
    inner: { x: 20, z: 30 },
    foo2: { k: 23, p: 13 }
};

function deepCopi(object) {
    const copiObject = {};

    for (let key in object) {
        if (typeof object[key] === 'object') {
            const recursionObj = deepCopi(object[key]);
            copiObject[key] = recursionObj;
        } else {
            copiObject[key] = object[key];
        }
    }

    return copiObject;
}

const copiObject = deepCopi(obj);

obj.inner.x = 100;
console.log(copiObject);