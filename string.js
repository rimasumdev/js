const prompt = require('prompt-sync')({ sigint: true });
let str = 'This is as ModernS Texts';
// console.log(str.padStart(21, ' '));
// let arr = str.split(' ');
// let isTrue = true;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 'as') {
//     isTrue = false;
//     break;
//   }
// }
// if (!isTrue) {
//   console.log('Data Found!');
// } else {
//   console.log('Data Not Found!');
// }
let input = prompt('Search Text : ');
const reg = new RegExp(input, 'gi');
let strCount = str.match(reg);
console.log(
  '"' + input + '"' + ' Word Found in ' + strCount.length + ' Places'
);
// let count = 0;
// for (let v of str) {
//   if (v == 's') {
//     count++;
//   }
// }
// console.log(count);
