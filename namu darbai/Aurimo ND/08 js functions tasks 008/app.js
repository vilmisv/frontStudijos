const x = prompt('iveskite ploti');
const y = prompt('iveskite ilgi');

function recatngle(x, y) {
    let shape = '';

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) { 
            shape  += ' *';
        }
        shape += '\n';
    }
    return shape;
}

console.log(recatngle(x,y));