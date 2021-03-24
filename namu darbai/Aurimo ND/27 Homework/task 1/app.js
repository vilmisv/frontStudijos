
const rapLyrics = ['jou', 'cekirout', 'I', 'am', 'raper'];  

let search = prompt('find lyrics');

let find = rapLyrics.map((item) => search === item ? alert('found: ' + item) : alert('not found'));

