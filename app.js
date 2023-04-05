let test = 'Masum Reza is Name';
let count = 0;

for (let v of test) {
  if (v == ' ') {
    count++;
  }
}
console.log('There are ' + count + ' Space in Yor Sentence');
// let sname = ' ';
// let fullname = (sname && 'Masum') || 'This Not True';
// console.log(fullname);
