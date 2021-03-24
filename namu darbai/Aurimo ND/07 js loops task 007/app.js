const coffePrice = [1.8];

let total = 0;
let totalSugarSpoons = 0;

const coffeCount = prompt('how many coffes you want?');
const sugarSpoons = prompt('how many spoons sugar you want for cup?')

for (let i = 0; i < coffePrice.length; i++) {
    total = coffeCount * coffePrice[i];
    totalSugarSpoons = coffeCount * sugarSpoons;

}

alert('price is: ' + total + " " + 'total sugar: ' + totalSugarSpoons);