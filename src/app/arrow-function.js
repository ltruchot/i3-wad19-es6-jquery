
const toto = {
  a: 'titi',
  b: function () {
    console.log(this.a);
    const c = () => {
      console.log(this);
      const d = () => {
        console.log(this);
      };
      d();
    };
    c();
  },
};
toto.b();


const titi = () => console.log("je m'apelle loic");
titi();

const logEls = (tab) => {
  for (const el of tab) {
    console.log(el);
  }
};

const logEls2 = (tab) => tab.forEach(console.log);

$('body').on('click', console.log);

const log = function (str) {
  console.log(str);
};
console.log('coucou');


[1, 2, 3].forEach(console.log);

console.log([].reduce(
  (acc, cur) => acc + cur,
  0,
));
