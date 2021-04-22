let adressBook = {};
const form = document.querySelector('#main-form');

document.addEventListener('DOMContentLoaded', () => {
    
})


function getInputValue(selector) {
    const input = document.querySelector(selector);
    return input ? input.value : null;
}


function addToAdress() {

    adressBook = {
        fullName: getInputValue('#full-name'),
        phone: getInputValue('#phone'),
        email: getInputValue('#email'),
    };

}

function render() {
    const output = document.querySelector('.output');
    const outDiv = document.createElement('div');
    outDiv.className = 'outDiv';
    const delAndEditDiv = document.createElement('div');
    delAndEditDiv.className = 'del-and-edit';
    const deleteDiv = document.createElement('div');
    deleteDiv.className = 'delete';
    const x = document.createElement('img')
    x.className = 'trash';
    x.src = 'https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/trash-512.png';
    const editDiv = document.createElement('div');
    editDiv.className = 'editDiv';
    const edditBtn = document.createElement('img');
    edditBtn.className = 'edit-btn';
    edditBtn.src = 'https://icons-for-free.com/iconfiles/png/512/edit+document+edit+file+edited+editing+icon-1320191040211803620.png';
    const starDiv = document.createElement('div');
    const star = document.createElement('img');
    starDiv.setAttribute('type', 'checkbox');
    star.className = 'star';
    star.src = 'https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png';
    
    [adressBook.fullName, adressBook.phone, adressBook.email].forEach(text => {
        const element = document.createElement('div');      
        element.className = 'outputCard';
        const p = document.createElement('p');
        p.textContent = text;
        element.appendChild(p);
        outDiv.appendChild(element)
        output.appendChild(outDiv);
    });

    deleteDiv.appendChild(x);
    editDiv.appendChild(edditBtn);
    starDiv.appendChild(star);
    delAndEditDiv.appendChild(editDiv);
    delAndEditDiv.appendChild(starDiv);
    delAndEditDiv.appendChild(deleteDiv);
    output.appendChild(delAndEditDiv);

    deleteDiv.addEventListener('click', () => {
        outDiv.remove();
        x.remove();
    })

    starDiv.addEventListener('click', (event) => {

        if (event.target.click) {
            star.src = 'https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/star.png';
        } else {
            star.src = 'https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png';
        }
        console.log(event);
    });

}


form.addEventListener('click', event => {
    event.preventDefault();
    addToAdress();
    if (event.target.tagName === 'BUTTON') {
        switch (event.target.name) {
            case 'add':
                render();
                break;
            case 'delete':
                render();
                break;
        
            default:
                break;
        }
    }
    console.log(adressBook);
    localStorage.setItem('adressBook', JSON.stringify(adressBook));

})
