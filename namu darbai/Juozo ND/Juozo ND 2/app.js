const duomenys = [
    {
        name: 'Vilnius',
        isCity: true,
        population: 500000,
        additionalInfo: {
            name: 'Zirmunai',
            value: 100000
        }
    },
    {
        name: 'Kaunas',
        isCity: true,
        population: 300000,
    },
    {
        name: 'Klaipeda',
        isCity: true,
        population: 100000,
    },
    {
        name: 'Ariogala',
        isCity: false,
    },
]

const suformuotiDuomenys = duomenys.map((miestas) => `${miestas.name}, ${miestas.population ? miestas.name === 'Vilnius' ?  `, population: ${miestas.population} ` : `- ${miestas.population}` : 'populiacija nezinoma'}${miestas.additionalInfo ? `${miestas.additionalInfo.name} - ${miestas.additionalInfo.value}` : ``}`);

console.log(suformuotiDuomenys);