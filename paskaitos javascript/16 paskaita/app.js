const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')

buttons.forEach(button => {
    button.addEventListener('click', calculate);
    console.log(button);
});

function calculate (event) {
    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {

        if (display.value !== '') {
            display.value = eval(display.value);     
        }

    } else if (clickedButtonValue === 'c') {
        display.value = '';
    } else {
        display.value += clickedButtonValue;
    }
    console.log(event);

}

// function plus (num1, num2) {
//     return num1 + num2;
// }

// function minus (num1, num2) {
//     return num1 - num2;
// }

// function calc (event) {
//     const clickedButtonValue = event.target.value;

//     if(clickedButtonValue) {
//         display.value = clickedButtonValue;
//     }
// }
