let str = 'This is as Modern Text';
// console.log(str.padStart(21, ' '));
let arr = str.split(' ');
let isTrue = true;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 'as') {
    // console.log('Data Found!');
    isTrue = false;
    break;
  }
}
if (!isTrue) {
  console.log('Data Found!');
} else {
  console.log('Data Not Found!');
}
// let count = 0;
// for (let v of str) {
//   if (v == 's') {
//     count++;
//   }
// }
// console.log(count);
