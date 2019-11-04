import $ from 'jquery';

$('body').css('background-color', 'cyan');

const poisson = $('<img src="assets/images/poisson1.png" />');
$('body').append(poisson);
poisson.css({
  width: '300px',
  position: 'absolute',
  left: '600px',
  top: '500px',
});

const poisson2 = poisson.clone();
$('body').append(poisson2);
poisson2.css({
  left: '300px',
  top: '5px',
  transform: 'scaleX(-1)',
});

const poisson3 = poisson.clone();
$('body').append(poisson3);
poisson3.attr('src', 'assets/images/poisson2.png');
poisson3.css('left', '100px');

const algue = $('<img src="assets/images/algue1.png" />');
$('body').append(algue);
algue.css({
  width: '300px',
  position: 'absolute',
  left: '50px',
  bottom: '-20px',
});

const algue2 = algue.clone();
$('body').append(algue2);
algue2.attr('src', 'assets/images/algue2.png');
algue.css('left', '430px');

$('img').attr('title', 'toto');

let deg = 0;
setInterval(() => {
  const ctnSize = $(window).width();
  const elSize = poisson3.width();
  console.log(ctnSize);
  let now = parseInt(poisson3.css('left'), 10);
  deg++;
  now++;
  if (now <= (ctnSize - elSize)) {
    poisson.fadeOut(3000);
    poisson3.css({
      left: `${now}px`,
      transform: `rotate(${deg}deg)`,
    });
  } else {
    poisson.fadeIn(5000);
  }
}, 10);

$('img').animate({ left: `${$(window).width()}px` }, 5000, 'swing');


$('<div></div>')
  .css({
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '100%',
    'background-color': 'black',
  }).appendTo('body').animate({ left: '0' }, 10000);
