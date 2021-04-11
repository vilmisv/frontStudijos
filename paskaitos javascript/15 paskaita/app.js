// const arr = ['Jonas', 'vilmantas', 'ernerstas', 'tomas', 'erik', 'minde'];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }


// let name = 'dsd';

// let i = 0;

// while(i < 5) {
//     i++
//     console.log(name);
// }

// let name = 'vilmantas';

// let i = 0;

// do {
//     i++
//     console.log(name);
// } while (i < 1);

// const array = ['val', 'name', 'vilmantas', 'tom', 'sig'];

// array.forEach(element => {
//     if (element === 'vilmantas') {
//         console.log(element);
//     } 
// });


const hello = document.getElementById('hello');
const here = document.getElementById('here');

const labas = document.getElementById('labas');
const red = document.createElement('span');
const body = document.body;
const add = document.getElementById('add');
const del = document.getElementById('delete');



hello.addEventListener('click', (hel) => {
    if (here.style.display === 'none') {
        here.style.display === 'block';
    } else {
    here.style.display === 'none';
    console.log(hel);
    }
});

labas.addEventListener('keydown', (el) => {
    labas.classList.add('blue');
    console.log(el);
});

add.addEventListener('dblclick', (event) => {
    const span = document.createElement('span');
    const text = document.createTextNode('sveiki ')
    const body = document.body;
    span.append(text);
    body.append(span);
    console.log(event)
    del.addEventListener('click', (even) => {
        span.remove();
    })
});












