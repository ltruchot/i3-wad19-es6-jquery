
const tableEl = document.createElement('table');
const tr1 = document.createElement('tr');
const jours = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

function createLine(hobby) {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  td.innerText = hobby.name;
  tr.appendChild(td);
  for (const bool of hobby.frequence) {
    const tdEl = document.createElement('td');
    if (bool) {
      tdEl.innerHTML = '&bull;';
    }

    tr.appendChild(tdEl);
  }

  return tr;
}

// mettre le premie TD vide dans le premier TR
const td1 = document.createElement('td');
tr1.appendChild(td1);

// mettre un TD par jour de la semaine dans le premier TR
for (const jour of jours) {
  const tdEl = document.createElement('td');
  tdEl.innerText = jour;
  tr1.appendChild(tdEl);
}

tableEl.appendChild(tr1);


const hobbies = [
  { name: 'Balalaïka', frequence: [true, false, true, true, false, false, true] },
  { name: 'Ordinateur', frequence: [false, false, true, true, true, false, true] },
  { name: 'Enfant', frequence: [false, false, false, false, false, true, true] },
];

for (const hobby of hobbies) {
  tableEl.appendChild(createLine(hobby, jours));
}


document.body.appendChild(tableEl);

const tdNodes = document
  .querySelectorAll('table tr:not(:first-child) td:not(:first-child)');

for (let i = 0; i < tdNodes.length; i++) {
  tdNodes[i].addEventListener('click', function (e) {
    if (e.target.innerHTML !== '') {
      e.target.innerHTML = '';
    } else {
      e.target.innerHTML = '&bull;';
    }
  });
}
