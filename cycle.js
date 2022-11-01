// let str = 'i am in the easycode';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//   if (i === 0 || str[i - 1] === ' ') {
//     res += str[i].toUpperCase();
//   } else {
//     res += str[i];
//   }
// }

// console.log(res);


// let str = 'tseb eht ma i';
// let res = '';

// for (let i = str.length; i--;) {
//   res += str[i];
// }

// console.log(res);


// let res = 1;

// for (let i = 1; i <= 10; i++) {
//   res *= i;
// }


// let str = 'JavaScript is a pretty good language';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//   if (i === 0 || str[i - 1] === ' ') {
//     res += str[i].toUpperCase();
//   } else if (str[i] !== ' '){
//     res += str[i];
//   }
// }

// console.log(res);


// let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (let num of arr) {
//   if (num % 2) {
//     console.log(num);
//   }
// }


// Дан объект:

// let list = {

// name: ‘denis’,

// work: ‘easycode’,

// age: 29

// }


// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.


// let list = {
//   name: 'denis',
//   work: 'easycode',
//   age: 29
// }

// for (let key in list) {
//   if (typeof list[key] === 'string') {
//     list[key] = list[key].toUpperCase();
//   }
// }

// console.log(list);