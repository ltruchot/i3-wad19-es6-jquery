import $ from 'jquery';
import { displaySongs, play } from './app/services';
import { sons } from './app/data';

const ul = displaySongs(sons);
$('body').append(ul);
