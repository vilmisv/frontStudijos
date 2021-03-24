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

const maziau = duomenys.filter(miestas => miestas.population < 500000).map(miestas => miestas.name);

console.log(maziau);