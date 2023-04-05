const names = ['Masum', 'Raid', 'Ashik', 'Rima'];
let index = -1;
let name = names[++index];
// console.log(name);
setInterval(() => {
  name = names[index++];
  console.log(name, name.length);
  if (index === name.length) {
    index = 0;
  }
}, 1000);
