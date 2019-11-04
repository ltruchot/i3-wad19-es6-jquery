import $ from 'jquery';

export const play = (path) => {
  const song = new Audio(path);
  song.play();
};


export const displaySongs = (sons) => {
  const ul = $('<ul></ul');

  for (const son of sons) {
    const li = $(`<li>${son}</li>`);
    li.on('click', () => play(son));
    ul.append(li);
  }
  return ul;
};
