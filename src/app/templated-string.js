/*
const game = 'Mario"MO"';
const players = 'Peach' + ", 'Toad', Mario";
const templateString = `
<div>
  <p>"Hello' ${players}. Welcome on ${game}."</p>
</div>
`;
 */
// createSelect: string[] -> HTMLSelectElement
function createSelect(arr) {
  /*   let options = '';
      let i = 0;
      for (const el of arr) {
        options += `<option value="${i + 1}">${el}</option>`;
        i++;
      }
      const select = `<select>${options}</select>`; */
  const options = arr.map(function (el, i) {
    return `
        <option value="${i + 1}" ${i === 2 ? 'selected' : ''}>
          ${el}
        </option>`;
  });
  console.log(options);
  // const select = `<select>${options.join('')}</select>`;
  const select = document.createElement('select');
  select.innerHTML = options;
  return select;
}

const finalSelect = createSelect(['toto', 'titi', 'tata']);
console.log(finalSelect);
finalSelect.addEventListener('change', function (event) {
  console.log(finalSelect.value);
});
document.body.appendChild(finalSelect);
/* $('body').append(finalSelect);

    finalSelect.on('change', function (e) {
      console.log(e.target.value);
    });
     */

