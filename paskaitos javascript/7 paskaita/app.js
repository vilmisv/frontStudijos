const arr = [];
const btn = document.getElementById('add-btn');
const p = document.getElementById('last-element');
let count = 0;

function pushElementToArray () {
    const paskutinisNarys = arr[arr.length - 1];
    if (paskutinisNarys <= 0) {
        const body = document.querySelector('body');
        body.classList.add('bg-red');
        alert('nebegalimas veiksmas'); 
        return;
    }
    arr.push(paskutinisNarys !== undefined  ? paskutinisNarys - 1 : Math.floor(Math.random() * 10));
    const span = document.createElement('span');
    const index = arr.length -1;
    span.textContent = `${index > 0 ? ', ' : ''}${arr[index]}`;
    p.appendChild(span);
    console.log(arr);
    
}

btn.onclick = pushElementToArray;
