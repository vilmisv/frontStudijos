// const number = [1,2,3];


// const sum = number.reduce((acumulate, currentValue) => acumulate + currentValue);

// console.log(sum);

const kids = [
{
    name: 'licejus',
    total: 2000
},
{
    name: 'zemynos gimnazija',
    total: 3000
},
{
    name: 'profesine mokykla',
    total: 6000
}];

const totalKids = kids.reduce((acum, current) => {
    return acum + current.total
}, 0);

console.log(totalKids);
