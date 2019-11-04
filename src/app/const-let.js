/* function main() {
  let i = 10;
  setTimeout(function () {
    console.log(i);
  }, 0);
  console.log('coucou');
  i = 'toto';
}
main();
console.log('tata'); */
let i = 1;
i += 3;
i *= 8;
const list = [];
list.push(i);
const j = 40;
list.push(j);

/*
let sum = 0;
for (const el of list) {
  sum += el;
}
*/
const sum = list.reduce(function (acc, cur) {
  return acc + cur;
}, 0);
console.log(sum);
