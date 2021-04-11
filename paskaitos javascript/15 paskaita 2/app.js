const button1 = document.querySelectorAll('button .fb .btn');
const btn = document.getElementById('facebook');
button1.forEach(element => {
    console.log('dsdas', element);
});

for (let i = 0; i < button1.values.length; i++) {
    const element = button1.values[i];
    console.log(element);
    btn.addEventListener('click', (event) => {
    alert(element);

    console.log(event);
})

}


console.log(button1)
console.log('dasdsad')
