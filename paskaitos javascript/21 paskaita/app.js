const input = document.querySelector('#name');
const btnForm = document.querySelector('#form');
const output = document.querySelector('#output');
const arrList = [];

function render () {
    const p = document.createElement('p');
    p.textContent = arrList;
    // output.appendChild(p);
    output.innerHTML = null; // tam, kad nesusikurtu antro listo paspaudus, o liktu tik vienas
    output.appendChild(p);    

}


btnForm.addEventListener('click', event => {


    if (event.target.tagName === 'BUTTON') {

        switch (event.target.name) {
            case 'addEnd':
                arrList.push(input.value);
                render()
                break;
            case 'addBegining':
                arrList.unshift(input.value);
                render()
                break;
            case 'RemoveLast':
                arrList.pop(input.value);
                render()
                break;
            case 'RemoveFirst':
                arrList.shift(input.value);
                render()
                break;
            case 'reverse':
                arrList.reverse(input.value);
                render()
                break;           
        
            default:
                break;
        }
    }



});
