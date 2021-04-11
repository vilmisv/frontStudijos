const appEl = document.getElementById('app');                         //sukuriam kintamaji app is html
const todoInput = document.getElementById('todo-input');            //sukuriam kintamaji is html inputo
const addBtn = document.getElementById('todo-add-btn');              // sukuriam buttono kintamaji is html
const completedEl = document.getElementById('completed-count');
const totalEl = document.getElementById('total-count');

function addOne(el) {
    el.textContent = Number(el.textContent) + 1; // funkcija, kuri veikia, kai addinamas naujas tekstas ir + su senu tekstu reikalingas prie total ir complete skilties
}

function minusOne (el) {
    el.textContent = Number(el.textContent) - 1; // funkcija veikia kaip ir addOne tik ji minusuoja viska
}

function generateError (errorText) {                                // sukuriam funkcija kuri mums generuos errora ir mes teskta raudona, jei ives nedaugiau tris raides arba nieko
    const p = document.createElement('p');
    p.id = 'error';
    p.classList.add('color-danger');
    const textNode = document.createTextNode(errorText);
    p.appendChild(textNode);
    appEl.appendChild(p);                                          // prie app elemento pridedam p kuri sukurem
}

function getListItems () {
    const arr = [];
    const ul = document.getElementById('todo-list');
    ul.childNodes.forEach((li) => arr.push(li.textContent));
    return arr;
}

function addListItem (task) { //parametras task sukuriamas ir bus panaudojams varotojo ivedimui
    const ul = document.getElementById('todo-list');
    const checkBoxInput = document.createElement('input');
    checkBoxInput.setAttribute('type', 'checkbox');
    checkBoxInput.addEventListener('change', (event) => {
        if(event.target.checked) {
            liSpan.classList.add('line-through')
            addOne(completedEl);
        } else {
            liSpan.classList.remove('line-through');
            minusOne(completedEl);
        }
    })
    const li = document.createElement('li');
    const deleteSpan = document.createElement('span'); //delete from x
    const deleteAllBtn = document.getElementById('deleteAll-btn'); //delete from all btn
    const liSpan = document.createElement('span');
    deleteSpan.classList.add('color-danger');
    const x = document.createTextNode('✕');
    deleteSpan.classList.add('icon');
    deleteSpan.appendChild(x);
    const textNode = document.createTextNode(task); //sukuria text node, tai ka ves vartotojas ir priskiriamas paremetrui task
    li.appendChild(checkBoxInput); 
    liSpan.appendChild(textNode);   
    li.appendChild(liSpan);
    li.appendChild(deleteSpan);
    ul.appendChild(li);
    addOne(totalEl);    
    deleteAllBtn.addEventListener('click', () => {
     li.remove() //delete All   
     minusOne(totalEl);
    }); 
    deleteSpan.addEventListener('click', () =>  {
     li.remove() //delete from x   
     minusOne(totalEl); 
    });
}


addBtn.addEventListener('click', () => {
    const erorrElement = document.getElementById('error');
    if (todoInput.value && todoInput.value.length > 3) {  
        addListItem(todoInput.value); // addlistitem('task' parametras ka ives varototjas, o varotojas ives is todoInput 
        console.log(getListItems()); 
    if (erorrElement) {
        erorrElement.remove();
    } 
    } else if (!erorrElement) {
        generateError('to short item');
    }
    todoInput.value = ''; // parasius teksta ir paspaudus add tekstas dingsta is inputo lauko.
    todoInput.focus(); // padaro taip kad text laukelyje ivedus kazkoki teksta ir paspaudus add pelytes kursorius lieka toje pacioje vietoje.
});

