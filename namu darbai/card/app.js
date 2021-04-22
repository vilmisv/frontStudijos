let cardData = {}; // formos duomenys saygosis objekte

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('cardData');

    if (savedData) {
    cardData = JSON.parse(savedData); // /JSON.parse konvertuoja reikmses i stringa ir pan is tekstines i objekta
    render();        
    }

})

function getInputValue (selector) { //sukuriama funkcija, kuri paselektina id
    const input = document.querySelector(selector);
    return input ? input.value : null;  //jei inputas yra grazinam input.value jei ne tai null
}

function render () {  //render funkcija sukuria kortele 
    const imageDiv = document.createElement('div');
    const image = document.createElement('div');
    const container2 = document.createElement('div');
    container2.className = 'cardOutput2';
    image.className = 'img';
    imageDiv.className = 'image';
    const output = document.querySelector('#output');    
    const container = document.createElement('div');
    container.className = 'cardOutput';

    [cardData.email, cardData.phone, cardData.adress].forEach(text => {
        const element = document.createElement('p');
        const elementDiv = document.createElement('div');
        elementDiv.className = 'elements-div';
        element.className = 'p-container';
        element.textContent = text;
        elementDiv.appendChild(element)
        container.appendChild(elementDiv);
        // for each prasuka pro array ir sukuria kiekviena paragrafa 
        // tada paragrafui priskiria teksta, kuri ives varotojas is inputo

    });

    [cardData.name, cardData.job].forEach(text => {
        const element2 = document.createElement('p');
        element2.textContent = text;
        container2.appendChild(element2);
        // for each prasuka pro array ir sukuria kiekviena paragrafa 
        // tada paragrafui priskiria teksta, kuri ives varotojas is inputo

    });

    output.innerHTML = null; // tam, kad nesusikurtu antros kortele paspaudus submit, o keisto esama paspaudus submit
    imageDiv.appendChild(image);
    imageDiv.appendChild(container2);
    output.appendChild(imageDiv);    
    output.appendChild(container);
}

document.querySelector('#input-form').addEventListener('submit', event => {
    event.preventDefault(); // paspaudus mygtuka puslapis neatsinaujina ir neprarandami duomenys

    cardData = {  // sukuriamas objektas, kuriame saugomi paselektinti inputai
        name: getInputValue('#full-name'),
        email: getInputValue('#email'),
        phone: getInputValue('#phone'),
        adress: getInputValue('#adress'),
        job: getInputValue('#job'),
    };
    localStorage.setItem('cardData', JSON.stringify(cardData)); //isaugo reiskmes ir po refresho issiaugo visa korteles informcija
    render();

})