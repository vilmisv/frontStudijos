const arr = ['hello', 'ssasa'];

const input = prompt('ivesk kazka');

const rez = arr.map(value => input ? arr.push(input) : '');
const p = document.getElementById('dBaze');

const span = document.createElement('span');

span.textContent = arr;

p.appendChild(span);




