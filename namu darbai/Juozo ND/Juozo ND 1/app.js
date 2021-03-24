// 1. nukopijuoti array ir jame esancius objektus naudojant spread operatorius
// const kopija = 
// 2. pakeisti KOPIJOS nulinio index nario name i 'Vytas', bet orginalas turi nepasikeisti.

const nukopijuotiManePilnai = [{
    name: 'Jonas',
    age: 16
}, {
    name: 'Antanas',
    age: 30
}]


const kopija = nukopijuotiManePilnai.map(x => {
    return {...x};
});
kopija[0].name = 'vytas';

console.log(nukopijuotiManePilnai);
console.log(kopija);

