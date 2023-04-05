// let number = 1;
// for (let i = 5; i >= number; i--) {
//   var line = '';
//   for (let j = 1; j <= i; j++) {
//     line += '*' + ' ';
//   }
//   console.log(line);
// }
// let number = 10;
// for (let i = number; i >= 1; i--) {
//   var line = '';
//   for (let j = 1; j <= i; j++) {
//     line += j + ' ';
//   }
//   console.log(line);
// }
let number = 10;
for (let i = 1; i <= number; i++) {
  var line = '';
  for (let j = i; j <= number; j++) {
    line += j + ' ';
  }
  for (let j = 1; j <= i; j++) {
    line += j + ' ';
  }
  console.log(line);
}
