const number = 4;
let atsakymas;

do {
    atsakymas = prompt('spek skaiciu');
    if (atsakymas < number) {
        alert('too low')
    } else if (atsakymas > number) {
        alert('to high')
    }

} while (number != atsakymas);




alert('atspejai');


