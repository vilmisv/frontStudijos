const coffePrice = [1.8];

let total = 0;

const coffeCount = prompt('how many coffes you want?');

for (let i = 0; i < coffePrice.length; i++) {
    total = coffeCount * coffePrice[i];
}

alert('price is: ' + total);