import { get } from 'axios';
import $ from 'jquery';

const toto = [];
get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    toto.push(response);
    console.log(toto);
    return $.get('https://jsonplaceholder.typicode.com/todos/2');
  }).then((response) => {
    toto.push(response);
    throw new Error();
  }).then(() => {
    console.log(toto);
  })
  .catch((err) => console.log('toto', err));

console.log(toto);
