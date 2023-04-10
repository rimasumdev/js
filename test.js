// const names = ['Masum', 'Raid', 'Ashik', 'Rima'];
// let index = -1;
// let name = names[++index];
// // console.log(name);
// setInterval(() => {
//   name = names[index++];
//   console.log(name, name.length);
//   if (index === name.length) {
//     index = 0;
//   }
// }, 1000);
const prompt = require('prompt-sync')();
let lang = prompt('What is your favorite programming language?');

let feedback =
  lang.toLowerCase() === 'javascript' ? `It's great!` : `It's ${lang}`;

alert(feedback);
