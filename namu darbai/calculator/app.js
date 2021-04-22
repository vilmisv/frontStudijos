function render(result) {
    document.getElementById('output').textContent = result;  //render funkcija atvaizduoja isvedama rezultata
}

document.getElementById('actions').addEventListener('click', (event) => {  // sukuriamas click eventas ant actions divo su id actions
const inputOne = Number(document.querySelector('#input-one').value); //paverciamos reiksmes is string i number
const inputTwo = Number(document.querySelector('#input-two').value);

    if(event.target.tagName === 'BUTTON') { // jei evento target tag name yra button tada darom switcha tam, kad nepasispaustu visoje action divo vietoje 
        switch (event.target.name) {  // switche nurodoma pagal koki mygtuka vardu name suveiks norimas rezultatas. 
            case 'sum':  //case nurodoamas is button esantis name='';
                result = inputOne + inputTwo;  //vykdoma uzduotis ir prilyginimama rezultatui
                break;
            case 'minus':
                result = inputOne - inputTwo;
                break;
            case 'multiply':
                result = inputOne * inputTwo;
                break;
            case 'divide':
                result = inputOne / inputTwo;
                break;
            case 'modulus':
                result = inputOne % inputTwo;
                break;
            default:
                break;
        }
        render(result) // rezultatas siunciamas i render funkcija, kuri viska atvaizduos
    }
})





