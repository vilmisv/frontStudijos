const fullName = document.getElementById('fullName'); 
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const adress = document.getElementById('adress');
const job = document.getElementById('job');
const btn = document.getElementById('btn');
const card = document.querySelector('#card')

btn.addEventListener('click', event => {
   
    const div = document.createElement('div');
    div.classList.add('div-con');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const txt = document.createTextNode(fullName.value);

    const div2 = document.createElement('div');
    div2.classList.add('div2');
    const txt2 = document.createTextNode(email.value);
    const txt3 = document.createTextNode(phone.value);
    const txt4 = document.createTextNode(adress.value);
    const txt5 = document.createTextNode(job.value);

    card.appendChild(div);
    card.appendChild(div2);
    div.appendChild(p);
    div.appendChild(p5)
    p.appendChild(txt);
    p5.appendChild(txt5);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div2.appendChild(p4);

    p2.appendChild(txt2);
    p3.appendChild(txt3);
    p4.appendChild(txt4);

    if (fullName.value) {
        fullName.value = '';
    }


})
